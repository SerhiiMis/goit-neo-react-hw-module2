const Feedback = ({ feedback, totalFeedback }) => {
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
