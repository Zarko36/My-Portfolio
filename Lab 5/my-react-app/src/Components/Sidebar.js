// import React from "react";
// import app.css here
// import "@/App.css";
import React, { useEffect, useState } from 'react';

const Sidebar = () => {
    const [sortBy, setSortBy] = useState('viewed');
    const [timeFrame, setTimeFrame] = useState(1);
  
    useEffect(() => {
      const script = document.createElement('script');
      script.src = '/main.js';
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
    
    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };
    
    const handleTimeFrameChange = (event) => {
        setTimeFrame(event.target.value);
    };
    return (
        <form id="filter-form">
            <h2>Filter</h2>
            <label for="sort-by">Sort By:</label>
            <ul>
                <li>
                    <label>
                        <input type="radio" id="sort-by-viewed" name="sort-by" value="viewed" checked={sortBy === 'viewed'} onChange={handleSortByChange}></input>
                        Most Viewed
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio" id="sort-by-shared" name="sort-by" value="shared" checked={sortBy === 'shared'} onChange={handleSortByChange}></input>
                        Most Shared
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio" id="sort-by-emailed" name="sort-by" value="emailed" checked={sortBy === 'emailed'} onChange={handleSortByChange}></input>
                        Most Emailed
                    </label>
                </li>
            </ul>
            <br></br>
            <label for="time-frame">Time Frame:</label>
            <ul>
                <li>
                    <label>
                        <input type="radio" id="time-frame-1" name="time-frame" value="1" checked={timeFrame === '1'} onChange={handleTimeFrameChange}></input>
                        Day
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio" id="time-frame-7" name="time-frame" value="7" checked={timeFrame === '7'} onChange={handleTimeFrameChange}></input>
                        Week
                    </label>
                </li>
                <li>
                    <label>
                        <input type="radio" id="time-frame-30" name="time-frame" value="30" checked={timeFrame === '30'} onChange={handleTimeFrameChange}></input>
                        Month
                    </label>
                </li>
            </ul>
            </form>

    );
};

export default Sidebar;
