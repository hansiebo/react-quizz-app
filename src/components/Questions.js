import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

// Requirements:
// two screens to start and quizz
// Tally correct answers after "check answers is clicked"

export default function Quizz(props) {
  //call API once button is clicked and display questions
  const [startQuizz, setStartQuizz] = useState(false);
  //set the questions
  const [questions, setQuestions] = useState([]);
  //indicator if game was won
  const [quizzical, setQuizzical] = useState(false);

  //API call request
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  //Variable that stores the API elements that will be displayed on the page
  const questionElements = questions.map((item) => {
    //Merge all answer options and shuffle them to give a random position for correct and incorrect answers
    const allAnswers = [item.correct_answer, ...item.incorrect_answers].sort(
      () => Math.random() - 0.5
    );
    return (
      <div className="questions-card">
        <h2 className="questions" key={nanoid()}>
          {item.question}
        </h2>
        <button className="answer-btn" key={nanoid()}>
          {allAnswers[0]}
        </button>
        <button className="answer-btn" key={nanoid()}>
          {allAnswers[1]}
        </button>
        <button className="answer-btn" key={nanoid()}>
          {allAnswers[2]}
        </button>
        <button className="answer-btn" key={nanoid()}>
          {allAnswers[3]}
        </button>
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

//FUNCTION TO CHECK ANSWERS
//CHANGE BUTTON COLOUR BASED ON CORRECT OR INCORRECT ANSWERS
//DISABLE BUTTON COLOUS AFTER THEY'RE SELECTED
//FUNCTION TO ENABLE CHECK ANSWERS BUTTON
//COUNT HOW MANY CORRECT ANSWERS
//RENDER PLAY AGAIN BUTTON

/*<div>

//DISPLAY DATA OBJECT FROM STRING
{JSON.stringify(questions)}


      //STYLES
      <button className="options">Option</button>
      <button className="correct_answer">Right</button>
      <button className="wrong_answer">Wrong</button>
      <button className="options">Option</button>
      <hr></hr>
      
<button>{item.correct_answer}</button>
      <button>{item.incorrect_answers[0]}</button>
      <button>{item.incorrect_answers[1]}</button>
      <button>{item.incorrect_answers[2]}</button>
    </div>*/
