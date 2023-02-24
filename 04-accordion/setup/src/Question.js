import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ info, title }) => {
  const [show, setShow] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {show && <p>{info}</p>}
      </header>
    </article>
  );
};
export default Question;
