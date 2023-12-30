import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    YourName: "",
    YourEmail: "",
    Password: "",
    Repeatyourpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};
    if (formData.YourName === "" || formData.YourName === null) {
      isValid = false;
      validationErrors.YourName = "YourName name required";
    }
    if (formData.YourEmail === "" || formData.YourEmail === null) {
      isValid = false;
      validationErrors.YourEmail = "YourEmail name required";
    } else if (!/\S+@\S+\.\S+/.test(formData.YourEmail)) {
      isValid = false;
      validationErrors.YourEmail = "Email is not valid";
    }
    if (formData.Password === "" || formData.Password === null) {
      isValid = false;
      validationErrors.Password = " Password name required";
    } else if (formData.Password.length < 6) {
      isValid = false;
      validationErrors.Password = "password length at least 6 char";
    }
    if (
      formData.Repeatyourpassword === "" ||
      formData.Repeatyourpassword === null
    ) {
      isValid = false;
      validationErrors.Repeatyourpassword = "Repeatyourpassword name required";
    } else if (formData.Repeatyourpassword !== formData.Password) {
      isValid = false;
      validationErrors.Password = "Repeatyourpassword is not match";
    }
    setErrors(validationErrors);
    setValid(isValid);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8000/users", formData)
        .then((response) => alert("registration successfully"));
      navigator("./login").catch((error) => console.log(error));
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    {valid ? (
                      <></>
                    ) : (
                      <span className="text-damage">
                        {errors.YourName} {errors.YourEmail} {errors.Password}
                        {errors.Repeatyourpassword}
                      </span>
                    )}
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                YourName: event.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                YourEmail: event.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                Password: event.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                Repeatyourpassword: event.target.value,
                              })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <Link to="/login">Terms of service</Link>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="Submit"
                          className="btn btn-primary btn-lg"
                          onClick={handleSubmit}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
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

export default Registration;
