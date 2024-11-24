import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) => {
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <p className={styles.text}>Good: {feedback.good}</p>
      <p className={styles.text}>Neutral: {feedback.neutral}</p>
      <p className={styles.text}>Bad: {feedback.bad}</p>
      <p className={styles.text}>Total: {totalFeedback}</p>
      <p className={styles.text}> Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
