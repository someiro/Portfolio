"use client";

import styles from "./radio.module.css";

type RadioContent = {
  label: string;
  value: string;
  checked?: boolean;
};

type RadioProps = {
  label?: string;
  contents: RadioContent[];
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

const Radio = (props: RadioProps) => {
  const currentValue =
    props.value ??
    props.contents.find((item) => item.checked)?.value;

  return (
    <div className={styles.container}>
      {props.label && (
        <p className={styles.label}>
          {props.label}
        </p>
      )}

      <div className={styles.group}>
        {props.contents.map((item) => (
          <label
            key={item.value}
            className={`
              ${styles.item}
              ${props.disabled ? styles.disabled : ""}
            `}
          >
            <input
              type="radio"
              className={styles.input}
              checked={currentValue === item.value}
              disabled={props.disabled}
              onChange={() => {
                if (props.onChange) {
                  props.onChange(item.value);
                }
              }}
            />

            <span className={styles.circle}>
              <span className={styles.dot} />
            </span>

            <span className={styles.text}>
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radio;