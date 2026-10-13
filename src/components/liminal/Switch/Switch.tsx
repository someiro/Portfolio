"use client";

import styles from "./switch.module.css";

type SwitchProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
};

const Switch = ({
  checked = false,
  onChange,
  disabled = false,
  label,
}: SwitchProps) => {
  return (
    <label
      className={`
        ${styles.wrapper}
        ${disabled ? styles.disabled : ""}
      `}
    >
      <button
        type="button"
        disabled={disabled}
        className={`
          ${styles.switch}
          ${checked ? styles.checked : ""}
        `}
        onClick={() => onChange?.(!checked)}
      >
        <span className={styles.thumb}></span>
      </button>

      {label && (
        <span className={styles.label}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Switch;