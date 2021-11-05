import React, { Component } from "react";
import "./App.css";
// import {SearchBox} from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";
// I want the functionality and im adding onto it, hence react class extends component?s
// <h1> Mon-stars Line Up </h1>
// <SearchBox onSearchChange={this.onSearchChange} />
// <CardList monsters={filteredMonsters} />
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {};

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
