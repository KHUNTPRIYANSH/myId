import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Showuser.css";
import annex from "../Context/Context";
import { useContext } from "react";
import emailjs from "@emailjs/browser";

function Showuser() {
  const { clerklogin, dydologin, commisionerlogin } = useContext(annex);
  const [data, setdata] = useState([]);
  const { id } = useParams("");
  const form = useRef();
  console.log(id);

  const nav = useNavigate();

  const sendmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hxb4o6q",
        "template_hfklkgz",
        form.current,
        "2HyzU6HWOohEdmtXG"
      )
      .then((result) => {
        console.log(result.text);
        alert("message sent successfully");
      })
      .catch((error) => alert(error));
  };

  const approvedoc = async (id) => {
    const res = await axios.patch(
      `http://localhost:8080/api/getuser/PEON/${id}`
    );

    if (res) {
      alert("data updated");
      nav("/");
    } else {
      alert("error");
    }
  };
  const approvedofficer = async (id) => {
    const res = await axios.patch(
      `http://localhost:8080/api/getuser/officer/${id}`
    );

    if (res) {
      alert("data updated");
    } else {
      alert("error");
    }
  };
  const approvedcommisioner = async (id) => {
    const res = await axios.patch(
      `http://localhost:8080/api/getuser/commisioner/${id}`
    );

    if (res) {
      alert("data updated");
    } else {
      alert("error");
    }
  };

  const rejected = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/getuser/${id}`)
      .then((res) => {
        const dat = res.data;
        console.log(dat);
        setdata([dat]);
      });

    alert("deleted the data");
    nav("/List");
  };

  const Backmode = () => {
    nav("/List");
  };

  const profilenew = async () => {
    await axios
      .get(`http://localhost:8080/api/getuser/${id}`)
      .then((res) => {
        console.log(res);
        const dat = res.data;
        const id = res.data._id;
        console.log(id);
        setdata([dat]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    profilenew();
  }, []);

  return (
    <>
      {data.map((ele, id) => {
        return (
          <div className="form-container">
            <header className="event-sec">
              <center>
                <div className="e-title">Artist Profile</div>
              </center>
            </header>
            <form className="event-form-f">
              <div className="col-f">
                <div className="regi-field">
                  <label htmlFor="name">Name : </label>
                  <div className="val" name="name">
                    {ele.name}
                  </div>
                </div>
                <div className="regi-field">
                  <label htmlFor="name">id : </label>
                  <div className="val" name="email">
                    {ele._id}
                  </div>
                </div>
                <div className="regi-field">
                  <label htmlFor="gname">Group Name : </label>
                  <div className="val">{ele.gname}</div>
                </div>
                <div className="regi-field">
                  <label htmlFor="phone">Contact Number : </label>
                  <div className="val">{ele.number}</div>
                </div>
                <div className="regi-field">
                  <label htmlFor="email">Email : </label>
                  <div className="val">{ele.email}</div>
                </div>
                <div className="regi-field">
                  <label htmlFor="total-artist">
                    Total number of artist :{" "}
                  </label>
                  <div className="val">{ele.tnartist}</div>
                </div>
                <div className="regi-field">
                  <label htmlFor="theme">Theme of Performance : </label>
                  <div className="val">{ele.TOP}</div>
                </div>
                <div className="regi-field">
                  <label htmlFor="dance-form">
                    Form of Indian Classical Dance:{" "}
                  </label>
                  <div className="val">{ele.FOICD}</div>
                </div>
                <div className="regi-field">
                  <label htmlFor="awards">Details of Awards / Honors : </label>
                  <div className="val">{ele.DOA}</div>
                </div>
                <div className="regi-field">
                  <label htmlFor="past-work">
                    Have you performed at District, State, National or
                    International Level? If Yes, Provide Details
                  </label>
                  <div className="val">Ha ekvaar try kari ti</div>
                </div>
              </div>
              <div className="col-f">
                <div className="regi-field">
                  <label htmlFor="photo">Upload your passport size photo</label>
                  <div className="val">
                    <img
                      src={`http://localhost:8080/images/${ele.img}`}
                      alt="new"
                      className="dp"
                    />
                  </div>
                </div>
                <div className="regi-field">
                  <label htmlFor="aadhar">
                    Upload your Aadhar card's photo
                  </label>
                  <div className="val">
                    <img
                      src={`http://localhost:8080/images/${ele.adhar}`}
                      alt="data"
                      className="aadhar"
                    />
                  </div>
                </div>
                <div className="regi-field">
                  <label htmlFor="sign">
                    Upload the photo of your signature
                  </label>
                  <div className="val">
                    <img
                      src={`http://localhost:8080/images/${ele.sign}`}
                      alt="fetch"
                      className="sign"
                    />
                  </div>
                </div>
                <div className="nav-btn bbox">
                  <button
                    className="btns btn-r"
                    onClick={() => {
                      rejected(ele._id);
                    }}
                  >
                    Reject
                  </button>

                  {clerklogin && (
                    <>
                      <td className="">
                        <button
                          className=" btns btn-s"
                          onClick={() => {
                            approvedoc(ele._id);
                          }}
                        >
                          Approved
                        </button>
                      </td>
                    </>
                  )}

                  {dydologin && (
                    <>
                      <td className="">
                        <button
                          className=" btns btn-s"
                          onClick={() => {
                            approvedofficer(ele._id);
                          }}
                        >
                          Approved
                        </button>
                      </td>
                    </>
                  )}

                  {commisionerlogin && (
                    <>
                      <td className="">
                        <button
                          className=" btns btn-s"
                          onClick={() => {
                            approvedcommisioner(ele._id);
                          }}
                        >
                          Approved
                        </button>
                      </td>
                    </>
                  )}
                  <button className="btns btn-b" onClick={Backmode}>
                    Back
                  </button>
                </div>
              </div>
            </form>

            <header className="event-sec">
              <center>
                <div className="e-title">Suggestion Form</div>
              </center>
            </header>
            <div className="con-col col-r">
              <form
                action="form-handler.php"
                className="reason"
                ref={form}
                method="post"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
                <input
                  name="id"
                  type="text"
                  placeholder="Enter your ID"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  required
                />
                <textarea
                  rows={10}
                  name="message"
                  placeholder="message"
                  required
                  defaultValue={""}
                />
                <button onClick={sendmail} className="btns">
                  Send{" "}
                </button>
              </form>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Showuser;
