import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Protected from "./util/Protected";

import Homepage from "./pages/Homepage";
import Caught from "./pages/Caught";
import Mystery from "./pages/Mystery";

import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Catch from "./pages/Catch";
import useAuthentication from "./util/useAuthentication";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    localStorage.getItem("user") ? setisLoggedIn(true) : setisLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Protected />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/catch" element={<Catch />} />
            <Route path="/caught" element={<Caught />} />
            <Route path="/mystery" element={<Mystery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
