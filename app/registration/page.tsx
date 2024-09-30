"use client";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import RegistrationComponent from "../components/RegistrationComponent";
import styles from "./styles.module.css";

const Registration: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Image
          width={1000}
          height={1000}
          src={"/starfall.jpg"}
          className={styles.imageBlock}
          alt="background"
        />
      </div>
      <div className={classNames(styles.modal, styles.full)}>
        <RegistrationComponent />
      </div>
    </div>
  );
};

export default Registration;
