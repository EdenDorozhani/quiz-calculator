import { useEffect, useState } from "react";
import { getFilteredQuestions, getQuestionFilters } from "../helpers";

import { useNavigate } from "react-router-dom";
import FilterInputs from "../components/FilterInputs";
import Button from "../components/Button";

const QuestionSearch = () => {
  const [questionFiltersValues, setQuestionFiltersValues] = useState({
    category: "",
    dificulty: "",
    numberOfQuestions: "",
  });
  const [questionFilters, setQuestionFilters] = useState([]);
  const navigate = useNavigate();

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
              <div key={index}>
                {value === "numberOfQuestions" ? (
                  <label>Number of Questions</label>
                ) : (
                  <label>{value[0].toUpperCase() + value.slice(1)}</label>
                )}
                <FilterInputs
                  value={value}
                  index={index}
                  onChangeHandler={onChangeHandler}
                  questionFilters={questionFilters}
                  defaultValue={"Choose Value"}
                />
              </div>
            );
          })}
          <Button action={onQuestionSearch} content={"Submit"} />
        </div>
      </div>
    </>
  );
};
export default QuestionSearch;
