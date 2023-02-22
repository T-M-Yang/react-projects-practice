import React, { useState } from "react";
import data from "./data";
import List from "./List";

let idx = 0;

function App() {
  const [people, setPeople] = useState(data);

  const handleMinus = () => {
    const newPeople = [...people];
    newPeople.pop();
    setPeople(newPeople);
    if (idx === data.length) idx = 0;
  };

  const handleAdd = () => {
    const newPeople = [...people];
    if (idx < data.length) {
      newPeople.push(data[idx]);
      setPeople(newPeople);
      idx++;
    }
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={handleAdd}>Add one</button>
        <button onClick={handleMinus}>Minus one</button>
        <button
          onClick={() => {
            setPeople(data);
            idx = data.length;
          }}
        >
          Add people
        </button>
        <button
          onClick={() => {
            setPeople([]);
            idx = 0;
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
