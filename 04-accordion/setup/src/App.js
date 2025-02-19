import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Hokkaido is awesome!</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion id={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
