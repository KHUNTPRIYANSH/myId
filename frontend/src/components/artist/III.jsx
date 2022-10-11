import React from "react";
import "./ICard.css";
import Tilt from "react-parallax-tilt";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const ICard = () => {
  const printDocument = async () => {
    const input = await document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpg");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      //   pdf.output("dataurlnewwindow");
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="cen">
        <Tilt
          glareEnable={true}
          glareColor="#ebe7ee80"
          glarePosition="all"
          tiltMaxAngleX="13"
          tiltMaxAngleY="4"
        >
          <div className="ID-card" id="divToPrint">
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
                  src="https://avatars.githubusercontent.com/u/58349765?s=400&u=55817800e112236c457bdd064504b82b82e30401&v=4"
                  alt=""
                  className="id-dp"
                />
                <img
                  src="https://www.investopedia.com/thmb/na7Q1b971nlXOy76f-4F_Rxgt2k=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/qr-code-bc94057f452f4806af70fd34540f72ad.png"
                  alt=""
                  className="id-dp"
                />
              </div>
              <div className="right">
                <div className="id-field">
                  <label htmlFor="name">Name : </label>
                  <div className="val">Priyansh Khunt</div>
                </div>
                <div className="id-field">
                  <label htmlFor="id">ID : </label>
                  <div className="val">arts00069</div>
                </div>
                <div className="id-field">
                  <label htmlFor="gname">Group Name : </label>
                  <div className="val">Rinkiya Ke Papa</div>
                </div>
                <div className="id-field">
                  <label htmlFor="dance-form">Dance Form :</label>
                  <div className="val">Bharatnatyaam</div>
                </div>

                <div className="id-field">
                  <label htmlFor="theme">Theme : </label>
                  <div className="val">Beti Bachav Beti Padhav</div>
                </div>
                <div className="id-field">
                  <label htmlFor="email">Email : </label>
                  <div className="val">rinkiyaKePapa@gmail.com</div>
                </div>
                <div className="id-field">
                  <label htmlFor="date">Date Of issue :</label>
                  <div className="val">01/10/2022</div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
        <button onClick={printDocument} className="btns">
          Print
        </button>
      </div>
    </>
  );
};

export default ICard;
