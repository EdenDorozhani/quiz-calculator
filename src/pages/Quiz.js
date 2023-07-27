import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ProgressBar from "../components/ProgressBar";
import ButtonsContainer from "../components/ButtonsContainer";
import QuestionInfo from "../components/QuestionInfo";
import AlternativeItem from "../components/AlternativeItem";

const Quiz = () => {
  const [page, setPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [trackingAnswers, setTrackingAnswers] = useState([]);
  const [userPoints, setUserPoints] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state?.questions;
  const actualQuestion = questions[page - 1];

  useEffect(() => {
    if (!state?.length) {
      navigate("/");
    } else {
      setQuestions(state);
    }
  }, []);

  useEffect(() => {
    trackingAnswers[page - 1] && setUserAnswers(trackingAnswers[page - 1]);
  }, [page]);

  const onNextQuestion = () => {
    setUserAnswers([]);
    if (page < questions?.length) {
      setPage(page + 1);
    }
  };

  const onPrevQuestion = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const getUserAnswers = (answer, index) => {
    let array = [...userAnswers];
    let answersCollection = [...trackingAnswers];
    if (array.includes(index)) {
      array = array.filter((answer) => answer !== index);
    } else if (array.length < actualQuestion.correct_answers.length) {
      array.push(index);
    }
    answersCollection[page - 1] = array;
    setTrackingAnswers(answersCollection);
    setUserAnswers(array);
    calculateUserPoints(array);
  };

  const calculateUserPoints = (selectedAnswers) => {
    let pointsArray = [...userPoints];
    let totalPoints = 0;

    selectedAnswers.map((answer) => {
      if (
        actualQuestion.correct_answers.includes(answer) &&
        actualQuestion.type === "multiple"
      ) {
        return (totalPoints += actualQuestion.points[answer]);
      } else if (
        actualQuestion.correct_answers.includes(answer) &&
        actualQuestion.type === "single"
      ) {
        return (totalPoints += actualQuestion.points);
      }
    });

    pointsArray[page - 1] = totalPoints;
    setUserPoints(pointsArray);
  };

  const submitResults = () => {
    const pointsAmount = userPoints.reduce((sum, value) => (sum += value), 0);
    const questionsPoints = questions.map((question) => question.points);
    let totalQuizPoints;

    if (questions[0].type === "single") {
      totalQuizPoints = questionsPoints.reduce(
        (sum, value) => (sum += value),
        0
      );
    } else {
      totalQuizPoints = questionsPoints
        .flat()
        .reduce((sum, value) => (sum += value));
    }

    navigate("/results", {
      state: { total: totalQuizPoints, userPoints: pointsAmount },
    });
  };

  return (
    <div>
      <div className="questions-container">
        <ProgressBar page={page} questions={questions} />
        <QuestionInfo
          labelContent={`Question ${page}`}
          title={actualQuestion?.title}
        />

        <div className="answers-container">
          {actualQuestion?.answers.map((answer, index) => {
            let selected;
            if (userAnswers?.includes(index)) {
              selected = true;
            }
            return (
              <AlternativeItem
                selected={selected}
                answer={answer}
                index={index}
                getUserAnswers={getUserAnswers}
                key={index}
              />
            );
          })}
        </div>

        <ButtonsContainer
          questions={questions}
          page={page}
          onNextQuestion={onNextQuestion}
          submitResults={submitResults}
          onPrevQuestion={onPrevQuestion}
          nextButtonContent={"NEXT"}
          backButtonContent={"BACK"}
          finishButtonContent={"FINISH"}
        />
      </div>
    </div>
  );
};
export default Quiz;
