param(
		[Parameter(Mandatory=$false)][string] $certName = "localhost",
		[Parameter(Mandatory=$false)][string] $certFileName = "$certName-devCert",
		[Parameter(Mandatory=$false)][string] $certDescription = "Certificate For Local Dev",
		[Parameter(Mandatory=$false)]$password = "trippleXiting"
	)

# setup certificate properties including the commonName (DNSName) property for Chrome 58+

$certificate = New-SelfSignedCertificate `
    -Subject $certName `
    -DnsName $certName `
    -KeyAlgorithm RSA `
    -KeyLength 2048 `
    -NotBefore (Get-Date) `
    -NotAfter (Get-Date).AddYears(2) `
    -CertStoreLocation "cert:CurrentUser\My" `
    -FriendlyName "$certName : $certDescription" `
    -HashAlgorithm SHA256 `
    -KeyUsage DigitalSignature, KeyEncipherment, DataEncipherment `
    -TextExtension @("2.5.29.37={text}1.3.6.1.5.5.7.3.1") 
$certificatePath = 'Cert:\CurrentUser\My\' + ($certificate.ThumbPrint)



# create temporary certificate path
$currentPath = Convert-Path .
$currentPath = "$currentPath\devCert";
If(!(test-path $currentPath))
{
New-Item -ItemType Directory -Force -Path $currentPath
}

# set certificate password here
$pfxPassword = ConvertTo-SecureString -String $password -Force -AsPlainText
$pfxFilePath = "$currentPath\$certFileName.pfx"
$cerFilePath = "$currentPath\$certFileName.cer"

# create pfx certificate
Export-PfxCertificate -Cert $certificatePath -FilePath $pfxFilePath -Password $pfxPassword
Export-Certificate -Cert $certificatePath -FilePath $cerFilePath

# import the pfx certificate
Import-PfxCertificate -FilePath $pfxFilePath Cert:\LocalMachine\My -Password $pfxPassword -Exportable

# trust the certificate by importing the pfx certificate into your trusted root
Import-Certificate -FilePath $cerFilePath -CertStoreLocation Cert:\CurrentUser\Root

# optionally delete the physical certificates (don’t delete the pfx file as you need to copy this to your app directory)
# Remove-Item $pfxFilePath
Remove-Item $cerFilePath