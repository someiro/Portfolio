type SpacerProps = {
  size?: number;
};

const Spacer = (props: SpacerProps) => {
  let size;

  if (props.size) {
    size = props.size;
  } else {
    size = 24;
  }

  return (
    <div
      style={{
        width: "100%",
        height: `${size}px`,
      }}
    />
  );
};

export default Spacer;