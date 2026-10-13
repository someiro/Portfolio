import styles from "./text-area.module.css";

type TextAreaProps = {
  label?: string;
  rows?: number;
  size?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const TextArea = (props: TextAreaProps) => {
  let label, disabled, required, error, helperText, size, rows, value, onChange;

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
  if (props.rows) {
    rows = props.rows;
  } else if (props.rows == undefined || props.rows <= 0) {
    rows = 1;
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

      <textarea
        disabled={disabled}
        required={required}
        value={value}
        onChange={onChange}
        className={`
            ${styles.textarea}
            ${error ? styles.error : null}
            ${styles[size]}
        `}
        rows={rows}
      />
      {error ? (
        <>
          <label className={styles.sublabel}>{helperText}</label>
        </>
      ) : null}
    </div>
  );
};

export default TextArea;
