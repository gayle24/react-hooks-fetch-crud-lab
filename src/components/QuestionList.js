import React, { useEffect, useState } from "react";

function QuestionList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((items) => setItems(items));
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.prompt}
            <label htmlFor="answers">Answers</label>
            <select name="answers" className="answers">
              <option value={item.answers[0]}>{item.answers[0]}</option>
              <option value={item.answers[1]}>{item.answers[1]}</option>
              <option value={item.answers[2]}>{item.answers[2]}</option>
              <option value={item.answers[3]}>{item.answers[3]}</option>
            </select>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

