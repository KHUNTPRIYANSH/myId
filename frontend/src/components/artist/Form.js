import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import FormData from "form-data";
import Datafile from "../admin/Datafile";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const nav = useNavigate();

  const [name, setname] = useState("");
  const [gname, setgname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [tnartist, settnartist] = useState("");
  const [TOP, setTOP] = useState("");
  const [FOICD, setFOICD] = useState("");
  const [DOA, setDOA] = useState("");
  const [details, setdetails] = useState("");

  const [img, setimg] = useState([]);
  const [Aadhar, setAadhar] = useState([]);
  const [signature, setsignature] = useState([]);

  const passimge = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      setimg(e.target.files[0]);
    }
  };

  const adharimg = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      setAadhar(e.target.files[0]);
    }
  };

  const signimg = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      setsignature(e.target.files[0]);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    var data = new FormData();

    data.append("name", name);

    data.append("gname", gname);
    data.append("number", number);
    data.append("email", email);
    data.append("tnartist", tnartist);
    data.append("TOP", TOP);
    data.append("FOICD", FOICD);
    data.append("DOA", DOA);

    data.append("profile", img);

    data.append("profile", Aadhar);
    data.append("profile", signature);

    await axios
      .post("http://localhost:8080/api/evregister", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          alert("data successfully registered");
          nav("/");
        } else {
          alert("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // IMG SIZE VALIDATE

  const [errorMsgPhoto, setErrorMsgPhoto] = useState(false);
  const [errorMsgAdhar, setErrorMsgAdhar] = useState(false);
  const [errorMsgSig, setErrorMsgSig] = useState(false);

  const [isSuccessPhoto, setIsSuccessPhoto] = useState(false);
  const [isSuccessAdhar, setIsSuccessAdhar] = useState(false);
  const [isSuccessSig, setIsSuccessSig] = useState(false);

  // VALIDATE PHOTO
  const validatePhoto = () => {
    const MAX_FILE_SIZE = 2000; // 5MB
    if (!img) {
      setErrorMsgPhoto("Please choose a file");
      setIsSuccessPhoto(false);
      return;
    }
    console.log(img.size);
    const fileSizeKiloBytes = img.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsgPhoto("File Size must be Under 2MB");
      setIsSuccessPhoto(false);
      return;
    }
    if (img.size == undefined) {
      setErrorMsgPhoto("Please choose a file");
      setIsSuccessPhoto(false);
      return;
    } else {
      setErrorMsgPhoto("");
      setIsSuccessPhoto(true);
      return;
    }
  };

  // VALIDATE ADHAR
  const validateAdhar = () => {
    const MAX_FILE_SIZE = 2000; // 5MB
    if (!adharimg) {
      setErrorMsgAdhar("Please choose a file");
      setIsSuccessAdhar(false);
      return;
    }
    const fileSizeKiloBytes = adharimg.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsgAdhar("File Size must be Under 2MB");
      setIsSuccessAdhar(false);
      return;
    }
    if (adharimg.size == undefined) {
      setErrorMsgAdhar("Please choose a file");
      setIsSuccessAdhar(false);
      return;
    } else {
      setErrorMsgAdhar("");
      setIsSuccessAdhar(true);
      return;
    }
  };

  //  SINGNATURE VALIDATION
  const validateSig = () => {
    const MAX_FILE_SIZE = 2000; // 5MB
    if (!adharimg) {
      setErrorMsgSig("Please choose a file");
      setIsSuccessSig(false);
      return;
    }
    const fileSizeKiloBytes = adharimg.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsgSig("File Size must be Under 2MB");
      setIsSuccessSig(false);
      return;
    }
    if (adharimg.size == undefined) {
      setErrorMsgSig("Please choose a file");
      setIsSuccessSig(false);
      return;
    } else {
      setErrorMsgSig("");
      setIsSuccessSig(true);
      return;
    }
  };

  return (
    <>
      <div className="cen">
        <div className="form-container">
          <header className="event-sec">
            <center>
              <div className="e-title">Registration Form</div>
              <div className="e-sub-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                architecto quaerat
              </div>
              <div className="e-sub-title">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </center>
          </header>
          <form className="event-form-f">
            <div className="col-f">
              <div className="regi-field">
                <label htmlFor="name">Name : </label>
                <input
                  className="ip"
                  onChange={(e) => setname(e.target.value)}
                  id="name"
                  value={name}
                  name="name"
                  type="text"
                />
              </div>
              <div className="regi-field">
                <label htmlFor="gname">Group Name : </label>
                <input
                  className="ip"
                  id="gname"
                  onChange={(e) => setgname(e.target.value)}
                  value={gname}
                  name="gname"
                  type="text"
                />
              </div>
              <div className="regi-field">
                <label htmlFor="phone">Contact Number : </label>
                <input
                  className="ip"
                  id="phone"
                  onChange={(e) => setnumber(e.target.value)}
                  value={number}
                  name="number"
                  type="text"
                />
              </div>
              <div className="regi-field">
                <label htmlFor="email">Email : </label>
                <input
                  className="ip"
                  id="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  name="email"
                  type="email"
                />
              </div>
              <div className="regi-field">
                <label htmlFor="total-artist">Total number of artist : </label>
                <input
                  onChange={(e) => settnartist(e.target.value)}
                  value={tnartist}
                  className="ip"
                  id="total-artist"
                  name="tnartist"
                  type="text"
                />
              </div>
              <div className="regi-field">
                <label htmlFor="theme">Theme of Performance : </label>
                <input
                  className="ip"
                  id="theme"
                  onChange={(e) => setTOP(e.target.value)}
                  value={TOP}
                  name="Top"
                  type="text"
                />
              </div>
              <div className="regi-field">
                <label htmlFor="dance-form">
                  Form of Indian Classical Dance:{" "}
                </label>
                <select
                  id="dance-form"
                  onChange={(e) => setFOICD(e.target.value)}
                  value={FOICD}
                  name="FOICD"
                  className="ip"
                >
                  <option value="-1" selected>
                    Select DanceFrom{" "}
                  </option>
                  <option value="Bharatnatyam">Bharatnatyam</option>
                  <option value="Kuchipudi">Kuchipudi</option>
                  <option value="Kathakali">Kathakali</option>
                  <option value="Odisi">Odisi</option>
                  <option value="Manipuri">Manipuri</option>
                  <option value="Katthak">Katthak</option>
                  <option value="Mohiniattam">Mohiniattam</option>
                </select>
              </div>
            </div>
            <div className="col-f">
              <div className="regi-field">
                <label htmlFor="achiv">Details of Awards / Honors :</label>
                <textarea
                  htmlFor="awards"
                  id="awards"
                  name="DOA"
                  className="ip"
                  type="textfi"
                  defaultValue={""}
                />
              </div>
              <div className="regi-field">
                <label htmlFor="past-work">
                  Have you performed at District, State, National or
                  International Level? If Yes, Provide Details
                </label>
                <textarea
                  onChange={(e) => setDOA(e.target.value)}
                  value={DOA}
                  id="past-work"
                  name="details"
                  type="text"
                  rows="5"
                  className="ip"
                  defaultValue={""}
                />
              </div>
              <div className="regi-field">
                <label htmlFor="photo">Upload your passport size photo</label>
                <input
                  className="ip"
                  onChange={passimge}
                  accept="image/*"
                  id="photo"
                  name="profile"
                  type="file"
                />
                {isSuccessPhoto ? (
                  <p className="success-message">Validation successful</p>
                ) : (
                  <p className="error-message">{errorMsgPhoto}</p>
                )}
                <div className="validPhoto" onClick={validatePhoto}>
                  Upload
                </div>
              </div>
              <div className="regi-field">
                <label htmlFor="aadhar">Upload your Aadhar card's photo</label>
                <input
                  className="ip"
                  id="aadhar"
                  onChange={adharimg}
                  accept="image/*"
                  name="prof"
                  type="file"
                  required
                />
                {isSuccessAdhar ? (
                  <p className="success-message">Validation successful</p>
                ) : (
                  <p className="error-message">{errorMsgAdhar}</p>
                )}
                <div className="validPhoto" onClick={validateAdhar}>
                  Upload
                </div>
              </div>
              <div className="regi-field">
                <label htmlFor="sign">Upload the photo of your signature</label>
                <input
                  className="ip"
                  id="sign"
                  accept="image/*"
                  onChange={signimg}
                  name="sign"
                  type="file"
                />
                {isSuccessSig ? (
                  <p className="success-message">Validation successful</p>
                ) : (
                  <p className="error-message">{errorMsgSig}</p>
                )}
                <div className="validPhoto" onClick={validateSig}>
                  Upload
                </div>
              </div>
              <div className="nav-btn bbox">
                <button onClick={submit} className=" btns btn-s">
                  Submit
                </button>

                <input
                  className="btns btn-r"
                  type="reset"
                  defaultValue="Clear"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
