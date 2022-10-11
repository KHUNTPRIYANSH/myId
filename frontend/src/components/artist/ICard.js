import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

function NewICard() {
  // const printRef = React.useRef();
  // const printDocument = async () => {
  //     const element = printRef.current;
  //     const canvas = await html2canvas(element);
  //     const data = canvas.toDataURL('image/png');

  //     const pdf = new jsPDF();
  //     const imgProperties = pdf.getImageProperties(data);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight =
  //         (imgProperties.height * pdfWidth) / imgProperties.width;

  //     pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //     pdf.save('print.pdf');
  // };
  const printDocument = async () => {
    htmlToImage
      .toPng(document.getElementById("myPage"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, "PNG", 0, 0);
        pdf.save("download.pdf");
      });
  };
  return (
    <div>
      <div className="ID-card" id="myPage">
        <div className="id-top">
          <div className="logo">
            <img
              src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/gov-logo.png"
              alt=""
            />
          </div>
          <div className="id-title">
            <h1>Government of India</h1>
            <h2>Sports, Youth Cultural Activities Department</h2>
            <h3>Navratri Mahotsav (Rajkot) - 2022 ID-Card</h3>
          </div>
        </div>
        <div className="id-info">
          <div className="left">
            <img
              src={`https://media.istockphoto.com/photos/portrait-of-cheerful-attractive-indian-young-women-in-business-were-picture-id1315983936?b=1&k=20&m=1315983936&s=170667a&w=0&h=5EMnnJG30y5bb_LqMnyX1zyorGZ01Q7tNLBQ7YndN9U=`}
              alt=""
              className="id-dp"
            />

            {/* <QRCode title="dp" value={newstrign} size="150" /> */}
          </div>
          <div className="right">
            <div className="id-field">
              <label htmlFor="name">Name : </label>
              <div className="val">virengiri goswami</div>
            </div>
            <div className="id-field">
              <label htmlFor="id">ID : </label>
              <div className="val">7004</div>
            </div>
            <div className="id-field">
              <label htmlFor="gname">Group Name : </label>
              <div className="val">stack hackers</div>
            </div>
            <div className="id-field">
              <label htmlFor="dance-form">Dance Form :</label>
              <div className="val">flock dance</div>
            </div>

            <div className="id-field">
              <label htmlFor="theme">Theme : </label>
              <div className="val">7</div>
            </div>
            <div className="id-field">
              <label htmlFor="email">Email : </label>
              <div className="val">v@gmail.com</div>
            </div>
            <div className="id-field">
              <label htmlFor="date">Date Of issue :</label>
              <div className="val">10/5/22</div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={printDocument} className="btns">
        Print
      </button>
    </div>
  );
}

export default NewICard;
