"use client";

import styles from "./loading.module.css";

type LoadingProps = {
  size?: number;
};

const Loading = ({
  size = 42,
}: LoadingProps) => {
  return (
    <div
      className={styles.loading}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;