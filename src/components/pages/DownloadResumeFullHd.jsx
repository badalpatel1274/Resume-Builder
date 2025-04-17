import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const DownloadResumeFullHd = () => {
  const resumeElement = document.getElementById("resume-preview");

  if (!resumeElement) {
    console.error("Resume section not found!");
    return;
  }

  html2canvas(resumeElement, {
    scale: 5, // ⚡ Higher scale = better quality (but slightly bigger size)
    useCORS: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg" ,1); // 🔥 High quality JPEG

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("My_Resume_HighQuality.pdf");

    const estimatedSizeMB = (imgData.length * (3 / 4)) / 1024 / 1024;
    console.log(`Estimated Size: ~${estimatedSizeMB.toFixed(2)} MB`);
  });
};

export default DownloadResumeFullHd;
