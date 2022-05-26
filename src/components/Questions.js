import React from "react";
import { useState, useEffect } from "react";

export default function Quizz() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  //MERGE RIGHT ANSWER AND WRONG ANSWERS IN ONE ARRAY
  let allAnswers = questions.map(
    (item) =>
      item.incorrect_answers &&
      item.incorrect_answers.concat(item.correct_answer)
  );

  //CREATE ELEMENTS TO DISPLAY ON PAGE
  const questionElements = questions.map((item) => (
    <div>
      <h2 className="questions" key={Math.random(Math.floor() * 5)}>
        {item.question}
      </h2>
      <input
        type="radio"
        id="correct_answer"
        name="correct"
        value={item.correct_answer}
      />
      {item.correct_answer}
      <input
        type="radio"
        id="incorrect_answer"
        name="incorrect"
        value={item.incorrect_answers[0]}
      />
      {item.incorrect_answers[0]}
      <input
        type="radio"
        id="incorrect_answer"
        name="incorrect"
        value={item.incorrect_answers[1]}
      />
      {item.incorrect_answers[1]}
      <input
        type="radio"
        id="incorrect_answer"
        name="incorrect"
        value={item.incorrect_answers[2]}
      />
      {item.incorrect_answers[2]}
      <hr></hr>
    </div>
  ));

  return <div>{questionElements}</div>;
}

/*<div>

//DISPLAY DATA OBJECT FROM STRING
{JSON.stringify(questions)}


//DOESN'T WORK
<input type="radio" value={allAnswers[1]} />
      {allAnswers[1]}
      <input type="radio" value={allAnswers[2]} />
      {allAnswers[2]}
      <input type="radio" value={allAnswers[3]} />
      {allAnswers[3]}

<input
        type="radio"
        id="correct_answer"
        name="correct"
        value={item.correct_answer}
      />
      {item.correct_answer}
      <input
        type="radio"
        id="incorrect_answer"
        name="incorrect"
        value={item.incorrect_answers[0]}
      />
      {item.incorrect_answers[0]}
      <input
        type="radio"
        id="incorrect_answer"
        name="incorrect"
        value={item.incorrect_answers[1]}
      />
      {item.incorrect_answers[1]}
      <input
        type="radio"
        id="incorrect_answer"
        name="incorrect"
        value={item.incorrect_answers[2]}
      />
      {item.incorrect_answers[2]}


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
