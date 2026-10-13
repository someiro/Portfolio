"use client";

import { useState } from "react";
import styles from "./menu.module.css";
import { AiOutlineLeft } from "react-icons/ai";


type MenuProps = {
  children?: React.ReactNode;
};

const BottomMenu = (props: MenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={`
          ${styles.menu}
          ${open ? styles.open : ""}
        `}
      >
        {props.children}
      </div>
      <button className={styles.circleButton} onClick={() => setOpen(!open)}>
        <span className={styles.icon}><AiOutlineLeft /></span>
      </button>
    </div>
  );
};

export default BottomMenu;
