import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import { RootState } from "../../redux/store";
import "../../pages/pageStyle/MyValues.css"
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const QuizResult = () => {
  const rating = useSelector((state: RootState) => state.rating);
  const summaryGridRef = useRef<HTMLDivElement>(null);

  const renderArray = (arr: string[]) => {
    if (arr.length === 0) {
      return;
    }
    return arr.map((item, index) => (
      <React.Fragment key={index}>
        <span>{item}</span>
        {index !== arr.length - 1 && <span style={{ margin: "0 20px" }}></span>}
      </React.Fragment>
    ));
  };


  // todo: can not download
  const downloadSummary = async () => {
    if (summaryGridRef.current) {
      const canvas = await html2canvas(summaryGridRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("summary.pdf");
    }
  };


  return (
    <Layout>
      <div className="container">
        <div className="result-title">All done <br /> Here is a summary for you</div>

        <div className="summary-grid">
          <div className="summary-box most-important">
            <div className="summary-title">Most Important</div>
            <p className="summary-text">{renderArray(rating.mostImportant)}</p>
          </div>
          <div className="summary-box important">
            <div className="summary-title">Important</div>
            <p className="summary-text">{renderArray(rating.important)}</p>
          </div>
          <div className="summary-box less-important">
            <div className="summary-title">Less Important</div>
            <p className="summary-text">{renderArray(rating.lessImportant)}</p>
          </div>
          <div className="summary-box least-important">
            <div className="summary-title">Least Important</div>
            <p className="summary-text">{renderArray(rating.leastImportant)}</p>
          </div>
        </div>

        <div className="bottom-section">
          <div className="paragraph-container">
            <p className="summary-title">What's Next?
            </p>
            <p className="bottom-paragraph">Use this summary to share what is important to you with your provider. Ask your care provider questions you have and tell them what you choose.
            </p>
          </div>
          <button className="download-btn" onClick={downloadSummary}>
            Download Summary
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default QuizResult;
