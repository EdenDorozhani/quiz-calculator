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
        <button className="next" onClick={onNextQuestion}>
          NEXT
        </button>
      ) : (
        <button className="next" onClick={submitResults}>
          FINISH
        </button>
      )}
    </div>
  );
};

export default ButtonsContainer;
