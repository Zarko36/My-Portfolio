import "../Style/Results.css";
import React from "react";
import Article from "./Article";

function Results({ articles }) {
  const leftSide = articles.filter((_, index) => index % 2 === 0);
  const rightSide = articles.filter((_, index) => index % 2 !== 0);
  return (
    <div className="results-container">
      <div className="column"> {leftSide.map((article, index) => ( <Article key={index} article={article} /> ))} </div>
      <div className="column"> {rightSide.map((article, index) => ( <Article key={index} article={article} /> ))} </div>
    </div>
  );
}

export default Results;
