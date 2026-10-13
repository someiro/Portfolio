"use client";

import styles from "./header.module.css";

type HeaderProps = {
  maxWidth?: number;

  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;

  fixed?: boolean;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <header
        className={`
          ${styles.header}
          ${props.fixed ? styles.fixed : ""}
        `}
      >
        <div
          className={styles.inner}
          style={{
            maxWidth: props.maxWidth
              ? `${props.maxWidth}px`
              : "1200px",
          }}
        >
          <div className={styles.left}>
            {props.left}
          </div>

          <div className={styles.center}>
            {props.center}
          </div>

          <div className={styles.right}>
            {props.right}
          </div>
        </div>
      </header>

      {props.fixed && (
        <div
          style={{
            height: "64px",
          }}
        />
      )}
    </>
  );
};

export default Header;