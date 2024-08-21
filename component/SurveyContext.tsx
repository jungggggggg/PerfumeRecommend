import React, { createContext, useState, useContext } from 'react';

const SurveyContext = createContext(null);

type saveAnswer = {
  questionId: string,
  answer: string,
}

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});

  const saveAnswer = ({questionId, answer}: saveAnswer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  return (
    <SurveyContext.Provider value={{ answers, saveAnswer }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);