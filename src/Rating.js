import styles from "./Rating.module.css";
import star from "./icon-star.png";
import { useState } from "react";
import RatingBtns from "./RatingBtns";

function Rating() {
  const [selectedRating, setSelectedRating] = useState(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClick(num) {
    setSelectedRating(num);
    console.log(num);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    //console.log(isSubmitted)
    setIsSubmitted(true);
    //console.log(isSubmitted)
  }

  return !isSubmitted ? (
    <form className={styles.panel} onSubmit={handleFormSubmit}>
      <img
        src={star}
        alt="star"
        style={{
          height: "20px",
          background: "#232e7f",
          borderRadius: "100%",
          padding: "4px"
        }}
      />
      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.description}>
        All feedback is appreciated to improve our offering
      </p>
      {selectedRating}
      <div className={styles["rating-btns"]}>
        <RatingBtns handleRatingClick={handleRatingClick} />
      </div>

      <button disabled={selectedRating === undefined} className={styles.submit}>
        submit
      </button>
    </form>
  ) : (
    <div className={styles.panel}>
      <h1 className={styles.title}>Thank you</h1>
      <p className={styles.description}>
        You gave us {selectedRating} out of 5 stars and we really appreciate the
        feedback!
      </p>
    </div>
  );
}

export default Rating;
