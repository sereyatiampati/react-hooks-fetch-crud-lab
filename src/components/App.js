import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions]=useState([]);
  const url="http://localhost:4000/questions"

  useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data=>setQuestions(data))
  }, [])

  function handleNewQuestion(newData){
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(data => setQuestions([...questions, data]))
  }
  function handleDelete(id){
    const filteredQuestions= questions.filter(question=> question.id!==id)
    setQuestions(filteredQuestions)
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAdd={handleNewQuestion} /> : <QuestionList questions={questions} onDelete={handleDelete}/>}
    </main>
  );
}

export default App;
