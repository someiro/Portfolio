import styles from "./text-field.module.css";

type TextFieldProps = {
  label?: string;
  size?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const TextField = (props: TextFieldProps) => {
  let label, disabled, required, error, helperText, size, value, onChange;

  if (props.label) {
    label = props.label;
  } else {
    label = "";
  }
  if (props.disabled) {
    disabled = props.disabled;
  } else {
    disabled = false;
  }
  if (props.required) {
    required = props.required;
  } else {
    required = false;
  }
  if (props.error) {
    error = props.error;
  } else {
    error = false;
  }
  if (props.helperText) {
    helperText = props.helperText;
  } else {
    helperText = "";
  }
  if (props.size) {
    size = props.size;
  } else {
    size = "medium";
  }
  if (props.value) {
    value = props.value;
  } else {
    value = "";
  }
  if (props.onChange) {
    onChange = props.onChange;
  } else {
    onChange = undefined;
  }

  return (
    <div className={styles.Input}>
      <label className={styles.label}>
        {label} {required ? <span>*</span> : null}
      </label>

      <input
        disabled={disabled}
        required={required}
        value={value}
        onChange={onChange}
        className={`
            ${styles.input}
            ${error ? styles.error : null}
            ${styles[size]}
        `}
      />
      {error ? (
        <>
          <label className={styles.sublabel}>{helperText}</label>
        </>
      ) : null}
    </div>
  );
};

export default TextField;
