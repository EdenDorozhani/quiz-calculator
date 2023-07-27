import Button from "./Button";

const ButtonsContainer = ({
  onPrevQuestion,
  onNextQuestion,
  submitResults,
  page,
  questions,
}) => {
  return (
    <div className="button-container">
      <button className="cancel" onClick={onPrevQuestion}>
        BACK
      </button>
      {page != questions.length ? (
        <Button action={onNextQuestion} content={"NEXT"} />
      ) : (
        <Button action={submitResults} content={"FINISH"} />
      )}
    </div>
  );
};

export default ButtonsContainer;
