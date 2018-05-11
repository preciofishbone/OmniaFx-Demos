const shell = require("node-powershell");
const path = require("path");
const rootPath = process.cwd();

let ps;

function addCertToTrustedLinux(certPath) {
  // https://unix.stackexchange.com/questions/90450/adding-a-self-signed-certificate-to-the-trusted-list
  // Debian
  //sudo cp my.crt /usr/local/share/ca-certificates/
  //sudo update-ca-certificates
  //Fedora
  // /etc/pki/ca-trust/source/anchors/
  // sudo update-ca-trust extract.
  throw new Error('Not Implemented Yet!!!')
}

function addCertToTrustedMac(certPath) {
  throw new Error('Not Implemented Yet!!!')
}

function addCertToTrustedWindows(pfxPath, password) {
  console.log("starting powershell to add certs to windows cert store");
  ps = new shell();
  const pathToFile = path.join(rootPath, 'tools', './importCert-win.ps1');
  ps.addCommand(pathToFile, [
    { pfxPath: pfxPath },
    { certPass: password }
  ]);
  return ps.invoke().then(output => {
    console.log(output);
    return ps.dispose();
  });
}

function addCertToTrusted({ os, pfxPath, password, certPath }) {
  const isWin = /^win/.test();
  switch (os) {
    case "win32":
      return addCertToTrustedWindows(pfxPath, password);
    case "linux":
      return addCertToTrustedLinux(certPath);
    case "macOs":
      return addCertToTrustedMac(certPath);
    default:
      break;
  }
}

module.exports = addCertToTrusted;
