import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Items from "./components/Items";
import Total from "./components/Total";
import Nutrition from "./components/Nutrition";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "bread" },
      { id: 2, name: "milk" },
    ],
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = [...this.state.items, item];
    this.setState({
      items,
    });
  };

  deleteItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      items,
    });
  };

  render() {
    return (
      <div className='App'>
        <Items items={this.state.items} deleteItem={this.deleteItem} />
        <Form addItem={this.addItem} />
        <Total items={this.state.items} />
        <Nutrition items={this.state.items} />
      </div>
    );
  }
}

export default App;
