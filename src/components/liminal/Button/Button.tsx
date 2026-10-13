import styles from "./button.module.css";

type ButtonProps = {
  disabled?: boolean;
  size?: string;
  variant?: string;
  intention?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: ButtonProps) => {
  let disabled, size, variant, intention, children,type, onClick;
  if (props.disabled) {
    disabled = props.disabled;
  } else {
    disabled = false;
  }
  if (props.size) {
    size = props.size;
  } else {
    size = "large";
  }
  if (props.variant) {
    variant = props.variant;
  } else {
    variant = "outlined";
  }
  if (props.intention) {
    intention = props.intention;
  } else {
    intention = "shade";
  }
  if (props.children) {
    children = props.children;
  } else {
    children = "button";
  }
  if (props.type) {
    type = props.type;
  } else {
    type = undefined;
  }
  if (props.onClick) {
    onClick = props.onClick;
  } else {
    onClick = undefined;
  }
  return (
    <button
      disabled={disabled}
      className={`
        ${styles.button}
        ${styles[size]}
        ${styles[variant]}
        ${styles[intention]}
      `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
