import styles from "./card-container.module.css";

type CardContainerProps = {
  maxWidth?: number;
  fullWidth?: boolean;
  children?: React.ReactNode;
  padding?: boolean;
};

const CardContainer = (props: CardContainerProps) => {
  let maxWidth, fullWidth, children, padding;

  if (props.maxWidth) {
    maxWidth = props.maxWidth;
  } else {
    maxWidth = 1000;
  }

  if (props.fullWidth) {
    fullWidth = props.fullWidth;
  } else {
    fullWidth = false;
  }

  if (props.children) {
    children = props.children;
  } else {
    children = null;
  }

  if (props.padding) {
    padding = props.padding;
  } else {
    padding = false;
  }

  return (
    <div
      className={`
        ${styles.container}
        ${padding ? styles.padding : null}
      `}
      style={{
        maxWidth: fullWidth ? "100%" : `${maxWidth}px`,
      }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
