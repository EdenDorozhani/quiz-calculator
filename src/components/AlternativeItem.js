const AlternativeItem = ({ index, answer, selected, getUserAnswers }) => {
  return (
    <div
      onClick={() => getUserAnswers(answer, index)}
      className={selected ? "answer active" : "answer"}
    >
      <div>
        <span>{index + 1}</span>
      </div>
      <p>{answer}</p>
    </div>
  );
};

export default AlternativeItem;
