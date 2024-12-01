"use client";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const RegistrationComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
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
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                alt="Your Company"
                src="/icons/logo.png"
                className="mx-auto h-20 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
              Sign up
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="block w-full rounded-md dark:bg-[#545464] px-3 py-1.5 text-base
                      text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-[#767676e6]
                      placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                      focus:outline-blue-600 sm:text-sm/6"
                      placeholder="example@mail.ru"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md dark:bg-[#545464] px-3 py-1.5 text-base
                      text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-[#767676e6]
                      placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                      focus:outline-blue-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                    Confirm password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword ?? ""}
                      onChange={handleChange}
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md dark:bg-[#545464] px-3 py-1.5 text-base
                      text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-[#767676e6]
                      placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                      focus:outline-blue-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-4">
                <button
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  <a href="/login" className='text-white no-underline'>
                    Login
                  </a>
                </button>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold text-blue-600 hover:text-blue-500 no-underline">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
  );
};

export default RegistrationComponent;
