import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../css/login.css";
import { createUser } from "../../util/endpoints";

// Copied from https://mdbootstrap.com/docs/standard/extended/login/
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const nameChange = (e) => {
    setUsername(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passChange = (e) => {
    setPass(e.target.value);
  };

  const confirmPassChange = (e) => {
    setConfirmPass(e.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    if (pass != confirmPass) {
      console.log("Password does not match confirm password");
    } else {
      fetch(createUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: pass,
          re_password: confirmPass,
        }),
      }).then(() => navigate("/login"));
    }
  };

  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h4 className="mt-1 mb-5 pb-1">Sign Up</h4>
                    </div>

                    <form>
                      <p>Create a new account</p>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11">
                          Username
                        </label>
                        <input
                          type="text"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Username"
                          required
                          value={username}
                          onChange={nameChange}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11">
                          Email
                        </label>
                        <input
                          type="text"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Enter your Email"
                          required
                          value={email}
                          onChange={emailChange}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Enter your Password"
                          required
                          value={pass}
                          onChange={passChange}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">
                          Confirm password
                        </label>
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Retype password"
                          required
                          value={confirmPass}
                          onChange={confirmPassChange}
                        />
                      </div>

                      <div className="d-flex flex-column text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          onClick={handleSignUp}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Pokemon by Wen Kang</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
