const ProgressBar = ({ page, questions }) => {
  const progressBarFiller = {
    transition: "all 0.3s",
    borderRadius: "10px",
    width: (page / questions?.length) * 100 + "%",
    backgroundColor: "rgb(0, 74, 6)",
    height: "15px",
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div style={progressBarFiller}></div>
      </div>
      <p>
        {page}/{questions.length}
      </p>
    </div>
  );
};

export default ProgressBar;
