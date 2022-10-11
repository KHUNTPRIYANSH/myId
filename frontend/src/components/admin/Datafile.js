import React, { useEffect, useState } from "react";
import axios from "axios";

function Datafile() {
  const [alluser, setalluser] = useState([]);

  const getData = async () => {
    const dat = await axios.get("http://localhost:8080/api/getuser");
    console.log(dat.data.getuser);

    if (dat.status === "401") {
      alert("error in geting data");
    } else {
      setalluser(dat.data.getuser);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {alluser.length > 0 ? (
        alluser.map((ele, id) => {
          return (
            <div key={id}>
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
        })
      ) : (
        <h1>Loadded...</h1>
      )}
    </>
  );
}

export default Datafile;
