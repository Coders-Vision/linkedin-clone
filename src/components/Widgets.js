import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "../styles/widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="article">
        <div className="article-left">
          <FiberManualRecord />
        </div>
        <div className="article-right">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgetsHeader">
        <h2>Linkedin News</h2>
        <Info />
      </div>
      {newsArticle("Weekly jobless claims rise less than expected, but hold above 800,000", "Top news-1254 readers")}
      {newsArticle("Nearly 46,000 businesses slashed 401(k) contributions during pandemic", "Top news-854 readers")}
      {newsArticle("Within a decade you may be working with an avatar or a digital twin", "Top news-3452 readers")}
      {newsArticle("1 in 4 Americans will be working remotely in 2021, Upwork survey reveals", "Top news-4875 readers")}
      {newsArticle("Cyberpunk 2077 has sold more than 13 million copies, despite launch disaster and refunds", "Top news-8755 readers")}
    </div>
  );
}

export default Widgets;
