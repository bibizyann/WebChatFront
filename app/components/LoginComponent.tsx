"use client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
const LoginComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("There was a problem with the registration:", error);
    }
  };

  return (
    <div
      id="registrationModal"
      role="dialog"
      aria-labelledby="registrationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              style={{ marginBottom: "15px" }}
              id="registrationModalLabel"
            >
              Login
            </h5>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  style={{ marginBottom: "15px" }}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  style={{ marginBottom: "15px" }}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a
                  href="/registration"
                  type="button"
                  className="btn btn-secondary"
                >
                  Register
                </a>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
