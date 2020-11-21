import React from "react";
import "./Article.css";

const Article = (props) => {
  return (
    <div className="Article" onClick={props.clicked}>
      <img src={props.imgSrc} className="article-img"></img>
      <h1>{props.title}</h1>
      <a>{props.para}</a>
    </div>
  );
};

export default Article;
