import styles from "./card.module.css";

type CardProps = {
  image?: string;
  title?: string;
  detail?: string;
  meta?: string;
};

const Card = (props: CardProps) => {
  const title = props.title ?? "Card Title";
  const detail = props.detail ?? "Detail Text";
  const meta = props.meta ?? "yyyy-mm-dd";

  return (
    <article className={styles.article}>
      {props.image ? <img src={props.image} alt={title} /> : null}
      <div className={styles.cardInfo}>
        <h2>{title}</h2>
        <p>{detail}</p>
        <span>{meta}</span>
      </div>
    </article>
  );
};

export default Card;
