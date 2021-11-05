import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// I want the functionality and im adding onto it, hence react class extends component?
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Goblin", id: "asc1", color: "green" },
        { name: "Orc", id: "asr2", color: "green" },
        { name: "Troll", id: "as1W", color: "green" },
        { name: "Goblin", id: "asc2", color: "blue" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.monsters.map((monster) => (
              <h1> {monster.name}</h1>
            ))}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
