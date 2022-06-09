import React from "react";
import { useState, useEffect } from "react";

export default function Quizz(props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  //CREATE ELEMENTS TO DISPLAY ON PAGE
  const questionElements = questions.map((item) => {
    //MERGE ANSWERS AND SHUFFLE THEM
    const allAnswers = [item.correct_answer, ...item.incorrect_answers].sort(
      () => Math.random() - 0.5
    );

    //FUNCTION TO CHECK ANSWERS
    //CHANGE BUTTON COLOUR BASED ON CORRECT OR INCORRECT ANSWERS
    //DISABLE BUTTON COLOUS AFTER THEY'RE SELECTED
    //FUNCTION TO ENABLE CHECK ANSWERS BUTTON
    //COUNT HOW MANY CORRECT ANSWERS
    //RENDER PLAY AGAIN BUTTON

    return (
      <div className="questions-card">
        <h2 className="questions" key={Math.random(Math.floor() * 5)}>
          {item.question}
        </h2>
        <button className="answer-btn">{allAnswers[0]}</button>
        <button className="answer-btn">{allAnswers[1]}</button>
        <button className="answer-btn">{allAnswers[2]}</button>
        <button className="answer-btn">{allAnswers[3]}</button>
        <hr></hr>
      </div>
    );
  });

  return (
    <div>
      {questionElements}
      <button className="check-answers">Check Answers</button>
    </div>
  );
}
