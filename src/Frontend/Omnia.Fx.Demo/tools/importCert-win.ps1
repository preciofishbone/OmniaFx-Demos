param(
		[Parameter(Mandatory=$true)][string]$pfxPath,
		[Parameter(Mandatory=$true)][string]$certPass
	)

# setup certificate properties including the commonName (DNSName) property for Chrome 58+

# $certificate = Get-PfxCertificate -FilePath $pfxPath

# $certificatePath = 'Cert:\CurrentUser\My\' + ($certificate.ThumbPrint)
# set certificate password here
$pfxPassword = ConvertTo-SecureString -String $certPass -Force -AsPlainText

# $cerFilePath = "$currentPath\$certFileName.cer"

# create pfx certificate

#Export-Certificate -Cert $certificatePath -FilePath $cerFilePath

Write-Host "Importing Cert";
# import the pfx certificate
Import-PfxCertificate -FilePath $pfxPath Cert:\CurrentUser\Root -Password $pfxPassword -Exportable

# trust the certificate by importing the pfx certificate into your trusted root
#Import-Certificate -FilePath $cerFilePath -CertStoreLocation Cert:\CurrentUser\Root

# optionally delete the physical certificates (don’t delete the pfx file as you need to copy this to your app directory)
# Remove-Item $pfxFilePath
#Remove-Item $cerFilePath