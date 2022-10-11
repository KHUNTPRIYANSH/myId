import React, { useState, useEffect } from "react";
import "./ValidationList.css";
import axios from "axios";
import { NavLink, usena4, useNavigate } from "react-router-dom";
import annex from "../Context/Context";
import { useContext } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const ValidationList = () => {
  const { clerklogin, dydologin, commisionerlogin } = useContext(annex);

  const [alluser, setalluser] = useState([]);
  const nav = useNavigate();

  const getData = async () => {
    const dat = await axios.get("http://localhost:8080/api/getuser");
    console.log(dat);
    if (dat.status === "401") {
      alert("error in geting data");
    } else {
      setalluser(dat.data.getuser);
    }
  };

  const getdydoData = async () => {
    const dydo = await axios.get("http://localhost:8080/get/dydo");
    console.log(dydo.data.getdydo);
    setalluser(dydo.data.getdydo);
  };

  const getcom = async () => {
    const comm = await axios.get("http://localhost:8080/get/commisioner");
    console.log(comm.data.getcom);
    setalluser(comm.data.getcom);
  };

  const filterodisi = async () => {
    const comm = await axios.get("http://localhost:8080/Odisi/clerk");
    console.log(comm.data);
    setalluser(comm.data);
  };
  const filterKatthak = async () => {
    const comm = await axios.get("http://localhost:8080/Katthak/clerk");
    console.log(comm.data);
    setalluser(comm.data);
  };
  const filterKathakali = async () => {
    const comm = await axios.get("http://localhost:8080/Kathakali/clerk");
    console.log(comm.data);
    setalluser(comm.data);
  };
  const filterKuchipudi = async () => {
    const comm = await axios.get("http://localhost:8080/Kuchipudi/clerk");
    console.log(comm.data);
    setalluser(comm.data);
  };

  useEffect(() => {
    if (clerklogin) {
      getData();
    } else if (dydologin) {
      getdydoData();
    } else if (getcom) {
      getcom();
    }
  }, []);

  return (
    <>
      <header className="event-sec">
        <center>
          <div className="e-title">List Of Artist To Validate</div>
        </center>
        {clerklogin && <h1>login clerk</h1>}
        {dydologin && <h1>login dydo</h1>}
        {commisionerlogin && <h1>login commisioner</h1>}
      </header>
      <div className="t-box">
        <div className="filter" id="filter">
          <div className="fil-title">Filter By Dance</div>
          <div className="hid-sec" id="hid-sec">
            <button onClick={filterodisi}>odisi</button>
            <button onClick={filterKatthak}>Katthak</button>
            <button onClick={filterKathakali}>Kathakali</button>
            <button onClick={filterKuchipudi}>Kuchipudi</button>
            <button onClick={getData}>all data</button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Lead Name</th>
              <th>Event Name</th>
              <th>Dance Name</th>
              <th>Email</th>
              <th>Date</th>
              {clerklogin && <th> clerk status</th>}
              {dydologin && <th> Dydo status</th>}
              {commisionerlogin && <th> commisioner status</th>}
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {alluser.length > 0 ? (
              alluser.map((ele, id) => {
                return (
                  <tr>
                    <td>{ele.gname}</td>
                    <td>{ele.name}</td>
                    <td>Gujrat Dance Festival</td>
                    <td>{ele.FOICD}</td>
                    <td>
                      <a href="#">{ele.email}</a>
                    </td>
                    <td>{ele.date}</td>
                    {clerklogin && <td>{ele.PEON}</td>}
                    {dydologin && <td>{ele.officer}</td>}
                    {commisionerlogin && <td>{ele.commisioner}</td>}
                    <td>
                      <NavLink to={`/show/${ele._id}`}>
                        <button className="btns ">Show</button>
                      </NavLink>
                    </td>
                  </tr>
                );
              })
            ) : (
              <center>
                <h1>No Data Found</h1>
              </center>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ValidationList;
