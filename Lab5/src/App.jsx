import React, { useEffect, useState } from "react";
import "./Style/App.css";
import Filters from "./components/Filters";
import Results from "./components/Results";

const apiKey = "eR7Di06MA1iLQ6NqE9LvlSnxTuKG1mUd";
const baseUrl = "https://api.nytimes.com/svc/mostpopular/v2/";

function App() {
  const [articles, displayArticles] = useState([]);
  const [currPage, setCurrentDisplayedArticles] = useState(1);
  const [currPageArticles, displaycurrPageArticles] = useState(6);

  const [filterOption, setfilterOption] = useState('viewed');
  const [timeFrame, setTimeFrame] = useState('1');
  const [articleMaxDisplay, setarticleMaxDisplay] = useState(15);

  const filterOptions = { viewed: "Most Viewed", shared: "Most Shared", emailed: "Most Emailed", };
  const timeFrameOption = { '1': "Day", '7': "Week", '30': "Month", };

  useEffect(() => { fetchArticles(); }, [filterOption, timeFrame, articleMaxDisplay, currPage]);

  const fetchArticles = async () => { const url = `${baseUrl}${filterOption}/${timeFrame}.json?api-key=${apiKey}`;
    try { const response = await fetch(url);
      const metaData = await response.json();
      displayArticles(metaData.results.slice(0, articleMaxDisplay));
    } 
    catch (error) {
      console.error('Failed to fetch articles:', error);
      displayArticles(Array(articleMaxDisplay).fill(null));
    }
  };

  const switchFilterOption = (newfilterOption, newTimeFrame) => {
    setTimeFrame(newTimeFrame);
    setfilterOption(newfilterOption);
  };

  const setNumArticlesDisplayed = (newLimit) => { setarticleMaxDisplay(newLimit); };

  const lastArticleIndex = currPage * currPageArticles;
  const firstArticleIndex = lastArticleIndex - currPageArticles;
  const currArticles = articles.slice(firstArticleIndex, lastArticleIndex);
  const totalPages = Math.ceil(articles.length / currPageArticles);

  return (
    <div className="big-container">
      <h2 className='page-title'>{`${filterOptions[filterOption]} - ${timeFrameOption[timeFrame]}`}</h2>
      <div className="small-container">
        <Filters onFilterChange={switchFilterOption} onLimitChange={setNumArticlesDisplayed} articleMaxDisplay={articleMaxDisplay} />
        <div className="pages-container">
          <Results articles={currArticles} />
          {totalPages > 1 && (
            <div>
              {[...Array(totalPages)].map((_, index) => (
                <button key={index} onClick={() => setCurrentDisplayedArticles(index + 1)} disabled={currPage === index + 1} className={currPage === index + 1 ? "active" : ""}>{index + 1}</button>
              ))}
            </div>
          )}
        </div> 
      </div>
    </div>
  );
}

export default App;
