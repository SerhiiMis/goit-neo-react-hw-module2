import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.buttonGood}`}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={`${styles.button} ${styles.buttonNeutral}`}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={`${styles.button} ${styles.buttonBad}`}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={`${styles.button} ${styles.buttonReset}`}
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
