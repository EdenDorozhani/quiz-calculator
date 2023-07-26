const QuestionInfo = ({ page, actualQuestion }) => {
  return (
    <div className="question-handler">
      <label>Question {page}</label>
      <h2>{actualQuestion?.title}</h2>
    </div>
  );
};

export default QuestionInfo;
