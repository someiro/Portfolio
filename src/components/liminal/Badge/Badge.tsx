import styles from "./badge.module.css";

type BadgeProps = {
  intention?: string;
  label?: string;
};

const Badge = (props: BadgeProps) => {
  let intention, label;
  if (props.intention) {
    intention = props.intention;
  } else {
    intention = "primary";
  }
  if (props.label) {
    label = props.label;
  } else {
    label = "label";
  }
  return (
    <span
      className={`
            ${styles.badge} 
            ${styles[intention]}
        `}
    >
      {label}
    </span>
  );
};

export default Badge;
