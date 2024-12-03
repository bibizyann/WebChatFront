"use client";

import React from "react";
import LoginComponent from "../../../components/LoginComponent";

const Login: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen max-h-screen bg-[#e5e7eb] dark:bg-dark-2">
      <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col h-min m-auto mt-44 p-6
       dark:bg-dark-1 bg-[#fff] rounded-xl w-11/12 max-w-md shadow-[0_2px_12px_0px_rgba(25, 37, 61, 0.11)]">
        <LoginComponent />
      </div>
    </div>
  );
};

export default Login;
