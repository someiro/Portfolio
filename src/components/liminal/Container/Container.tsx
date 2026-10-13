import styles from "./container.module.css";

type ContainerProps = {
  maxWidth?: number;
  fullWidth?: boolean;
  children?: React.ReactNode;
  padding?: boolean;
};

const Container = (props: ContainerProps) => {
  let maxWidth, fullWidth, children, padding;
  if (props.maxWidth == undefined) {
    maxWidth = 1000;
  } else {
    maxWidth = props.maxWidth;
  }
  if (props.fullWidth) {
    fullWidth = props.fullWidth;
  } else {
    fullWidth = false;
  }
  if (props.children) {
    children = props.children;
  } else {
    children = <></>;
  }
  if (props.padding) {
    padding = props.padding;
  } else {
    padding = false;
  }

  return (
    <div
      style={{
        maxWidth: fullWidth ? "100%" : `${maxWidth}px`,
      }}
      className={`
        ${styles.container}
        ${padding ? styles.padding : null}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
