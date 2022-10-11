import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Show() {
  const [data, setdata] = useState([]);
  const { id } = useParams("");
  console.log(id);

  const profilenew = async () => {
    await axios
      .get(`http://localhost:8080/api/getuser/${id}`)
      .then((res) => {
        console.log(res);
        const dat = res.data;
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
          <div>
            <h1>name :{ele.name}</h1>
            <h2>gname:{ele.gname}</h2>
            <h2>number:{ele.number}</h2>
            <h3>email:{ele.email}</h3>
            <h3>tnartist:{ele.tnartist}</h3>
            <h3>Top:{ele.TOP}</h3>
            <h3>FOICD:{ele.FOICD}</h3>
            <h3>DOA:{ele.DOA}</h3>

            <img
              src={`http://localhost:8080/images/${ele.img}`}
              style={{ width: "100px", textAlign: "center", margin: "auto" }}
              alt="vaghela"
            />
            <img
              src={`http://localhost:8080/images/${ele.adhar}`}
              style={{ width: "100px", textAlign: "center", margin: "auto" }}
              alt="vaghela"
            />
            <img
              src={`http://localhost:8080/images/${ele.sign}`}
              style={{ width: "100px", textAlign: "center", margin: "auto" }}
              alt="vaghela"
            />
          </div>
        );
      })}
    </>
  );
}

export default Show;
