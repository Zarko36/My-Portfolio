import "../Style/Article.css";
import React from "react";

function Article({ article }) {
  const { url, title, published_date, abstract, media } = article;
  const grabImageFromURL = media?.[0]["media-metadata"]?.[2]?.url || "";
  return (
    <div className="article-container">
      <a href={url} className="article-link">
        <div className="header">
          <h2 className="header-title">{title}</h2>
          <h3 className="article-date">{published_date}</h3>
        </div>
        <div className="abstraction-container">
          <img src={grabImageFromURL} alt={title} />
          <p className="abstraction">{abstract}</p>
        </div>
      </a>
    </div>
  );
}

export default Article;
