import { Tune } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Progress.css";
function Progress(props) {
  const [btn, setbtn] = useState(true);
  let { progress, downloadId } = props;
  //   const [progress, setProgress] = useState(0);
  //   let { clerk, dydo, cms } = props;
  //   if (clerk === 1 && cms === 0 && dydo === 0) {
  //     setProgress(1);
  //   } else if (clerk === 1 && dydo === 1 && cms === 0) {
  //     setProgress(2);
  //   } else if (clerk === 1 && dydo === 1 && cms === 1) {
  //     setProgress(3);
  //   } else {
  //     setProgress(0);
  //   }

  useEffect(() => {
    switch (progress) {
      case 0:
        document.getElementById("r0").style.boxShadow =
          "0.5px 0.5px 5px 6px rgba(21, 253, 0, 0.267)";
        break;
      case 1:
        document.getElementById("p1").style.backgroundColor = "rgb(1,250,1)";
        document.getElementById("r1").style.backgroundColor = "lime";
        document.getElementById("r1").style.boxShadow =
          "0.5px 0.5px 5px 6px rgba(21, 253, 0, 0.267)";

        break;
      case 2:
        document.getElementById("p1").style.backgroundColor = "rgb(1,250,1)";
        document.getElementById("r1").style.backgroundColor = "lime";
        document.getElementById("p2").style.backgroundColor = "rgb(1,250,1)";
        document.getElementById("r2").style.backgroundColor = "lime";
        document.getElementById("r2").style.boxShadow =
          "0.5px 0.5px 5px 6px rgba(21, 253, 0, 0.267)";
        break;
      case 3:
        document.getElementById("p1").style.backgroundColor = "rgb(1,250,1)";
        document.getElementById("r1").style.backgroundColor = "lime";
        document.getElementById("p2").style.backgroundColor = "rgb(1,250,1)";
        document.getElementById("r2").style.backgroundColor = "lime";
        document.getElementById("p3").style.backgroundColor = "rgb(1,250,1)";
        document.getElementById("r3").style.backgroundColor = "lime";

        document.getElementById("r3").style.boxShadow =
          "0.5px 0.5px 5px 6px rgba(21, 253, 0, 0.267)";
        document.getElementById("btn").style.backgroundColor = "#7211c7";
        setbtn(false);
        break;
    }
  });

  return (
    <div id="progress" className="progresscontener">
      <div className="progressbar">
        <div className="prbox"></div>

        <p className="font">Approval Status</p>
        <div id="0">
          <div
            id="r0"
            className="roundfill"
            style={{ backgroundColor: "lime" }}
          ></div>
          <div className="approved">Registerd</div>
        </div>
        <div id="p1" className="progressline"></div>
        <div>
          <div id="r1" className="roundfill"></div>
          <div className="approved">Approved by Clerk</div>
        </div>
        <div id="p2" className="progressline"></div>
        <div>
          <div id="r2" className="roundfill"></div>
          <div className="approved">Approved by DYDO</div>
        </div>
        <div id="p3" className="progressline"></div>
        <div>
          <div id="r3" className="roundfill"></div>
          <div className="approved">Approved by commisioner</div>
        </div>
        <button id="btn" onClick={downloadId} disabled={btn}>
          Download ID
        </button>
      </div>
    </div>
  );
}

Progress.defaultProps = {
  progress: 0,
  downloadId: () => {},
};
export default Progress;
