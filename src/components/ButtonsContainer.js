import Button from "./Button";

const ButtonsContainer = ({
  onPrevQuestion,
  onNextQuestion,
  submitResults,
  page,
  questions,
  nextButtonContent,
  backButtonContent,
  finishButtonContent,
}) => {
  return (
    <div className="button-container">
      <button className="cancel" onClick={onPrevQuestion}>
        {backButtonContent}
      </button>
      {page != questions.length ? (
        <Button action={onNextQuestion} content={nextButtonContent} />
      ) : (
        <Button action={submitResults} content={finishButtonContent} />
      )}
    </div>
  );
};

export default ButtonsContainer;
