"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./select.module.css";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  disabled?: boolean;
};

const Select = (props: SelectProps) => {
  const { label, value, onChange, options, disabled } = props;

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  // 外側クリックで閉じる
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleSelect = (v: string) => {
    onChange(v);
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}

      <div ref={ref} className={styles.selectContainer}>
        <button
          type="button"
          className={styles.button}
          disabled={disabled}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.value}>
            {selected?.label ?? "選択してください"}
          </span>

          <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
            ▼
          </span>
        </button>

        {open && (
          <div className={styles.dropdown}>
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`${styles.option} ${
                  option.value === value ? styles.selected : ""
                }`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;