const QuestionInfo = ({ labelContent, title }) => {
  return (
    <div className="question-handler">
      <label>{labelContent}</label>
      <h2>{title}</h2>
    </div>
  );
};

export default QuestionInfo;
