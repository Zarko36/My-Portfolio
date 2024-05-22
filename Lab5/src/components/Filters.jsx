import "../Style/Filters.css";
import React, { useState, useEffect } from "react";

function Filters({ onFilterChange, onLimitChange, articleLimit }) {

  const [inputValue, setUserInput] = useState(articleLimit);
  const [sortby, setSortbyFilter] = useState('viewed');
  const [timeframe, setTimeframeFilter] = useState('1');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    if (parseInt(value, 10) > 15) { alert('Number is higher than 15'); }
  };

  const handleFilterChangeSubmit = (e) => {
    e.preventDefault();
    const validLimit = Math.min(parseInt(inputValue, 10), 15);
    onLimitChange(validLimit);
    onFilterChange(sortby, timeframe);
  };

  return (
    <div className="container">
      <form onSubmit={handleFilterChangeSubmit}>
        <input type="number" value={inputValue} onChange={handleFilterChange} placeholder="Enter article limit..." className="article-number" min="1" max="15"/>
        <div>
          <button type="submit">Search</button>
        </div>
        <h2>Filter</h2>
        <h3>Sort By:</h3>
        <ul className="options">
          <li>
            <input type="radio" name="sortby" id="viewed" checked={sortby === 'viewed'} onChange={() => setSortbyFilter('viewed')} />
            <label htmlFor="viewed">Most Viewed</label>
          </li>
          <li>
            <input type="radio" name="sortby" id="shared" checked={sortby === 'shared'} onChange={() => setSortbyFilter('shared')} />
            <label htmlFor="shared">Most Shared</label>
          </li>
          <li>
            <input type="radio" name="sortby" id="emailed" checked={sortby === 'emailed'} onChange={() => setSortbyFilter('emailed')} />
            <label htmlFor="emailed">Most Emailed</label>
          </li>
        </ul>
        <h3>Time Frame</h3>
        <ul className="options">
          <li>
            <input type="radio" name="timeframe" id="1" checked={timeframe === '1'} onChange={() => setTimeframeFilter('1')} />
            <label htmlFor="1">Day</label>
          </li>
          <li>
            <input type="radio" name="timeframe" id="7" checked={timeframe === '7'} onChange={() => setTimeframeFilter('7')} />
            <label htmlFor="7">Week</label>
          </li>
          <li>
            <input type="radio" name="timeframe" id="30" checked={timeframe === '30'} onChange={() => setTimeframeFilter('30')} />
            <label htmlFor="30">Month</label>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Filters;