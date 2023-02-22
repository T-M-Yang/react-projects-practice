import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const handleMinus = () => {
    const newPeople = [...people];
    newPeople.pop();
    setPeople(newPeople);
  };

  const handleAdd = () => {
    let idx = 0;
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
        <button onClick={() => setPeople(data)}>Add people</button>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
