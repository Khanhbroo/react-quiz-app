import { useState, useCallback } from "react";

import QUESTIONS from "../question";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <div id="question">
        <Question
          key={activeQuestionIndex}
          questionIndex={activeQuestionIndex}
          onSkipAnswer={handleSkipAnswer}
          onSelectAnswer={handleSelectAnswer}
        />
      </div>
    </div>
  );
};

export default Quiz;
