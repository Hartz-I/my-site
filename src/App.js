import React, { Component } from "react";
import "./App.css";
import Article from "./Article/Article";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

class App extends Component {
  state = {
    articles: [
      {
        title: "Hi! I'm Inan!",
        imgSrc:
          "https://avatars0.githubusercontent.com/u/62875018?s=460&u=b1470e7b85d06eac522d03b9d1385da26b2deac5&v=4",
        para:
          "Currently I'm working on this page! So stick along to learn more about it!",
      },
      {
        title: "Now. this is a work in progress!",
        para:
          "Till now I've been able to add the nav-bar and the cards. I'll try to add more slowly!",
      },
      {
        title: "Here is a cute cat picture for you!",
        imgSrc:
          "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg",
        para: "Aww! isn't that cute!",
      },
    ],
    wideView: false,
  };

  onClickHandler = () => {
    this.setState({
      wideView: true,
    });
  };

  render() {
    //abc
    let wideViewTab = null;

    if (this.wideView) {
      wideViewTab = (
        <div>
          <h1>Hi! Is this working?</h1>
        </div>
      );
    }

    return (
      <div className="App">
        <Header />
        <NavBar />
        <article className="Art">
          {this.state.articles.map((card, index) => {
            return (
              <Article
                title={card.title}
                para={card.para}
                key={index}
                imgSrc={card.imgSrc}
                clicked={this.onClickHandler}
              />
            );
          })}
          {wideViewTab}
        </article>
      </div>
    );
  }
}

export default App;
