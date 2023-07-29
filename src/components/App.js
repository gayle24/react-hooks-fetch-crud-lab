import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [newQuest, setNewQuest] = useState({});

  function handleNewQuest(somedata){
    console.log("Question Added");
    console.log(somedata);
    setNewQuest(somedata)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuest={handleNewQuest} /> : <QuestionList />}
    </main>
  );
}

export default App;
