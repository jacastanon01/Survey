import styles from "./Rating.module.css";

function RatingBtns({ handleRatingClick }) {
  return [1, 2, 3, 4, 5].map((rating) => (
    <button
      type="button"
      className={styles.rating}
      onClick={() => handleRatingClick(rating)}
    >
      {rating}
    </button>
  ));
}

export default RatingBtns;
