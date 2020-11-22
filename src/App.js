import React, { Component } from "react";
import "./App.css";
import Article from "./Article/Article";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";

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
      { title: "New Dawn", para: "Some new movie" },
      {
        title: "Have you ever thought about the meaning lessness of life?",
        para: "Work in progress again!!!",
      },
    ],
    searchView: [],
    searchViewBool: false,
    searchNotFound: {
      title: "Sorry!",
      massage: "None of the contents match your given input!",
    },
  };

  onClickHandler = () => {
    this.setState({
      wideView: true,
    });
  };

  searhChangeHandler = (event) => {
    const articles = [...this.state.articles];

    let newArticles = [];

    let searchField = event.target.value;

    console.log(searchField.length);

    for (let i = 0; i < this.state.articles.length; i++) {
      if (
        articles[i].title.slice(0, searchField.length).toLocaleLowerCase() ===
        searchField.slice(0, searchField.length).toLocaleLowerCase()
      ) {
        console.log("Matched!");
        newArticles.push(articles[i]);
      }
    }

    this.setState({ searchView: newArticles, searchViewBool: true });
  };

  render() {
    //abc

    let display = [...this.state.articles];

    if (this.state.searchViewBool) {
      display = [...this.state.searchView];
    }

    return (
      <div className="App">
        <Header />
        <SearchBar
          placeholder={"Search for content..." + "              "}
          changed={this.searhChangeHandler}
        />
        <NavBar />
        <article className="grid-container">
          {display.map((card, index) => {
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
        </article>
      </div>
    );
  }
}

export default App;
