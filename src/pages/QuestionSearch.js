import { useEffect, useState } from "react";
import { getFilteredQuestions, getQuestionFilters } from "../helpers";

import { useNavigate } from "react-router-dom";
import FilterInputs from "../components/FilterInputs";

const QuestionSearch = () => {
  const [questionFiltersValues, setQuestionFiltersValues] = useState({
    category: "",
    dificulty: "",
    numberOfQuestions: "",
  });
  const [questionFilters, setQuestionFilters] = useState([]);
  const navigate = useNavigate();
  console.log("questionFilters", questionFilters);

  useEffect(() => {
    const filters = getQuestionFilters();
    setQuestionFilters(filters);
  }, []);

  const onQuestionSearch = () => {
    const filteredQuestions = getFilteredQuestions(questionFiltersValues);
    if (filteredQuestions) {
      navigate("/quiz", { state: { questions: filteredQuestions } });
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setQuestionFiltersValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="filter-questions-container">
        <div className="filter-questions-form">
          <h2>Generate Quiz</h2>
          {Object.keys(questionFilters).map((value, index) => {
            return (
              <FilterInputs
                key={index}
                value={value}
                index={index}
                onChangeHandler={onChangeHandler}
                questionFilters={questionFilters}
              />
            );
          })}

          <button onClick={onQuestionSearch}>Submit</button>
        </div>
      </div>
    </>
  );
};
export default QuestionSearch;
