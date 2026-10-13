"use client";

import styles from "./checkbox.module.css";

type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
};

const Checkbox = (props: CheckboxProps) => {
  return (
    <label
      className={`
        ${styles.container}
        ${props.disabled ? styles.disabled : ""}
      `}
    >
      <input
        type="checkbox"
        checked={props.checked}
        disabled={props.disabled}
        onChange={(e) => props.onChange?.(e.target.checked)}
      />

      <div
        className={`
          ${styles.checkbox}
          ${props.checked ? styles.checked : ""}
        `}
      >
        <span className={styles.checkmark}>✓</span>
      </div>

      {props.label && <span className={styles.label}>{props.label}</span>}
    </label>
  );
};

export default Checkbox;
