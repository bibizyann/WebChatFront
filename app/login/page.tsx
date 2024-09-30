"use client";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import LoginComponent from "../components/LoginComponent";
import style from "./styles.module.css";

const Login: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Image
          width={1000}
          height={1000}
          src={"/starfall.jpg"}
          className={style.imageBlock}
          alt="background"
        />
      </div>
      <div className={classNames(style.modal, style.full)}>
        <LoginComponent />
      </div>
    </div>
  );
};

export default Login;
