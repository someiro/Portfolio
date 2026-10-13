import styles from "./card.module.css";

type CardProps = {
  title?: string;
  detail?: string;
  meta?: string;
};

const Card = (props: CardProps) => {
  let title, detail, meta;
  if (props.title) {
    title = props.title;
  } else {
    title = "Card Title";
  }
  if (props.detail) {
    detail = props.detail;
  } else {
    detail = "Detail Text";
  }
  if (props.meta) {
    meta = props.meta;
  } else {
    meta = "yyyy-mm-dd";
  }
  return (
    <article className={styles.article}>
      <div className={styles.cardInfo}>
        <h2>{title}</h2>
        <p>{detail}</p>
        <span>{meta}</span>
      </div>
    </article>
  );
};

export default Card;
