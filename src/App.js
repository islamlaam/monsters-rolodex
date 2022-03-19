import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/cardList.component";
import { SearchBox } from "./components/search-box/searchBox.component";

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

  changeHandler = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          changeHandler={this.changeHandler}
          placeholder="Search monster"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
