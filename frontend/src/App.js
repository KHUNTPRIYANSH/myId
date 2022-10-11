import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Homepage
import Error404 from "./components/homepage/Error404";
import Nav from "./components/homepage/Nav";
import Home from "./components/homepage/home";
import About from "./components/homepage/About";
import Contact from "./components/homepage/Contact";
import Footer from "./components/homepage/Footer";
// forms
import LogIn from "./components/forms/LogIn";
import SignUp from "./components/forms/signUp";
import AdminLogin from "./components/forms/AdminLogin";
// artist
import Events from "./components/artist/Events";
import ICard from "./components/artist/ICard";
import III from "./components/artist/III";
import Progress from "./components/artist/Progress";
import Form from "./components/artist/Form";
// admin
import Data from "./components/admin/Datafile";
import ValidationList from "./components/admin/ValidationList";
import Show from "./components/admin/Show";
import Showuser from "./components/admin/Showuser";
//context
import annex from "./components/Context/Context";
const App = () => {
  const [loginuser, setloginuser] = useState(false);
  const [currentuser, setcurrentuser] = useState("");
  const [listshow, setlistshow] = useState(false);
  const [clerklogin, setclerklogin] = useState(false);
  const [dydologin, setdydologin] = useState(false);
  const [commisionerlogin, setcommisionerlogin] = useState(false);
  const [useridcard, setuseridcard] = useState(false);
  const [Idcard, setIdcard] = useState("");

  return (
    <Router>
      <annex.Provider
        value={{
          loginuser,
          setloginuser,
          currentuser,
          setcurrentuser,
          listshow,
          setlistshow,
          clerklogin,
          setclerklogin,
          dydologin,
          setdydologin,
          commisionerlogin,
          setcommisionerlogin,
          useridcard,
          setuseridcard,
          Idcard,
          setIdcard,
        }}
      >
        <Nav />
        {/* <III /> */}

        <Routes>
          <Route
            exact
            path="*"
            element={
              <>
                <Error404 />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <About />
                <Contact />
              </>
            }
          />
          <Route
            exact
            path="/home"
            element={
              <>
                {/* <ICard /> */}
                <Events />
                <Progress progress={2} />
                <Contact />
              </>
            }
          />
          {/* <Route path="/hidMenu" element={<HidMenu />} /> */}
          <Route path="/show/:id" element={<Showuser />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/form" element={<Form />} />
          <Route path="/profile" element={<Showuser />} />
          <Route
            path="/list"
            element={
              <>
                <ValidationList />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </annex.Provider>
    </Router>
  );
};

export default App;
