//import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDelete}) {
  console.log(questions)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question, index)=> <QuestionItem key={index} question={question} onClickDelete={onDelete}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
