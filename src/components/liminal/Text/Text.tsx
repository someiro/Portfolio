import styles from "./text.module.css";

type TextProps = {
  size?: string,
  weight?: string,
  children?: React.ReactNode
}

const Text = (props: TextProps) => {
  let size, weight, children;
  if (props.size) {
    size = props.size;
  } else {
    size = "r";
  } 
  if (props.weight) {
    weight = props.weight;
  } else {
    weight = "normal"
  }
  if (props.children) {
    children = props.children;
  } else {
    children = <></>
  }
  return (
    <p
      className={`
        ${styles[size]}
        ${styles[weight]}
      `}
    >
      {children}
    </p>
  );
};

export default Text;
