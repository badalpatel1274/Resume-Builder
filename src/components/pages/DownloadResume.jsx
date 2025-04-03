import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const DownloadResume = () => {
  const resumeElement = document.getElementById("resume-preview"); // ✅ ID match honi chahiye

  if (!resumeElement) {
    console.error("❌ Resume section not found!");
    return;
  }

  html2canvas(resumeElement, {
     scale: 3,
     useCORS:true,
     logging:true

  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();  // 210 mm
    const pdfHeight = pdf.internal.pageSize.getHeight(); // 297 mm

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight); // ✅ Fit poori page pe
    pdf.save("My_Resume.pdf");
  });
};

export default DownloadResume;
