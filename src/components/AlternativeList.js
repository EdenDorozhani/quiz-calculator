const AlternativeList = ({ actualQuestion, userAnswers, getUserAnswers }) => {
  return (
    <div className="answers-container">
      {actualQuestion?.answers.map((answer, index) => {
        let selected;
        if (userAnswers?.includes(index)) {
          selected = true;
        }
        return (
          <div
            onClick={() => getUserAnswers(answer, index)}
            style={{
              border: "1px solid rgb(0, 74, 6)",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              height: "40px",
              backgroundColor: selected && "rgb(0, 74, 6)",
              color: selected ? "white" : "black",
            }}
            key={index + 1}
            className="answer"
          >
            <div>
              <span>{index + 1}</span>
            </div>
            <p>{answer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AlternativeList;
