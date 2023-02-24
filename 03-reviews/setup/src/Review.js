import React, { useState } from "react";
import people from "./data";
import {
  FaArrowAltCircleLeft,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0); // index!
  const { name, job, image, text } = people[index];

  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }

    if (index < 0) {
      return people.length - 1;
    }

    return index;
  };

  const handlePrevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      console.table(newIndex);
      return checkIndex(newIndex);
    });
  };

  const handleNextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  // const handleNextPerson = () => {
  //   setIndex(checkIndex(index + 1));
  //   console.log(index);
  // };

  const handleRandom = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) newIndex += 1;
    setIndex(checkIndex(newIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        Random
      </button>
    </article>
  );
};

export default Review;
