import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/login.css";
import { loginUser } from "../../util/endpoints";
import useAuthentication from "../../util/useAuthentication";

// Copied from https://mdbootstrap.com/docs/standard/extended/login/
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuthentication();
  const navigate = useNavigate();
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch(loginUser, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return "Fail";
        }
      })
      .then((data) => {
        if (data !== "Fail") {
          const access = data.access;
          const refresh = data.refresh;
          setAuth(access, refresh);
          window.location.replace("/caught");
        } else {
          alert("Wrong email or password!");
        }
      });
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
                      {/* <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style="width: 185px;"
                        alt="logo"
                      /> */}
                      <h4 className="mt-1 mb-5 pb-1">Log In</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11">
                          Email
                        </label>
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Email"
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
                          placeholder="Password"
                          value={password}
                          onChange={passChange}
                        />
                      </div>

                      <div className="d-flex flex-column text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={handleSignIn}
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link className="btn btn-outline-danger" to="/signup">
                          Create new
                        </Link>
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

export default Login;
