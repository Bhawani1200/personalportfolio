const requestedCertificate = new URLSearchParams(window.location.search).get("cert");
const certificate = certificateData[requestedCertificate] || certificateData.nextjs;
const image = document.getElementById("certificate-image");
const pdf = document.getElementById("certificate-pdf");

document.getElementById("certificate-title").textContent = certificate.title;
document.getElementById("certificate-meta").textContent = certificate.meta;
document.getElementById("certificate-download").href = certificate.file;
const extension = certificate.type === "pdf" ? "pdf" : "jpg";
document.getElementById("certificate-download").download = `${certificate.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-certificate.${extension}`;

if (certificate.type === "pdf") {
  image.hidden = true;
  pdf.src = `${certificate.file}#view=Fit&toolbar=0&navpanes=0`;
} else {
  pdf.hidden = true;
  image.src = certificate.file;
  image.alt = `${certificate.title} certificate awarded to Bhawani Limbu`;
}
document.title = `${certificate.title} Certificate | Bhawani Limbu`;
