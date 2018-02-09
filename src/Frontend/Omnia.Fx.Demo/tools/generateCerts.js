const pem = require("pem");
const { writeFileSync } = require("fs");
const path = require("path");
const { promisify } = require("util");
const addCertToTrusted = require("./addCertToTrusted");

const createCertPr = promisify(pem.createCertificate);
const convertToPkc = promisify(pem.convert.PEM2PFX);

const password = require("./configs.consts").pfxPassphrase;
const rootPath = process.cwd();

const keyPath = path.join(rootPath, "tools", "key.pem");
const certPath = path.join(rootPath, "tools", "cert.pem");
const csrPath = path.join(rootPath, "tools", "csr.pem");
const pfxPath = path.join(rootPath,"tools", "certificate.pfx");

/**
 * If you want to use environment path to openssl you can 
 * uncomment below and point to the openssl binaries
 */
// pem.config({
//   pathOpenSSL: 'C:/Program Files/OpenSSL/bin/openssl.exe'
// });

console.log("Generating Certs");
createCertPr({
  days: 364,
  selfSigned: true,
  altNames: ["localhost"]
})
  .then(certs => {
    console.log("Writing PEM Certs to disk");
    writeFileSync(keyPath, certs.serviceKey);
    writeFileSync(certPath, certs.certificate);
    writeFileSync(csrPath, certs.csr);
  })
  .then(_ =>
    convertToPkc(
      {
        cert: certPath,
        key: keyPath
      },
      pfxPath,
      password
    )
  )
  .then(_ => {
    // ex process.platform {'darwin', 'freebsd', 'linux', 'sunos', 'win32'}
    return addCertToTrusted({os:process.platform, pfxPath, password, certPath});
  })
  .catch(console.error);
