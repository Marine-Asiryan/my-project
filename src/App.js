import React, { Component } from 'react';

import './main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      list: [],
      filter: ''
    };
  }

    change = (event) => {
      this.setState({ text: event.target.value });
    }

    addItem = (event) => {
      event.preventDefault();
      this.setState((prevState) => ({
        text: '',
        list: [...prevState.list, prevState.text]
      }));
    }

    changefilt= (event) => {
      this.setState({ filter: event.target.value });
    }

    render() {
      const { text } = this.state;
      const { filter } = this.state;
      const { list } = this.state;
      return (
        <div className="app">
          <h1> My first to do </h1>
          <form className="toDoForm" onSubmit={this.addItem}>
            <input
              className="inputToDo"
              type="text"
              placeholder="write something"
              value={text}
              onChange={this.change}
            />
            <input
              className="inputButton"
              type="submit"
              value="Add"
            />
            <div className="forfilter">
              <b>Write for filtering </b>
            </div>
            <input
              className="inputToDo"
              type="text"
              placeholder="filtering"
              value={filter}
              onChange={this.changefilt}
            />
          </form>
          <ul>
            {
              list.map((item, index) =>
                item.search(filter) !== -1 ?
                  <li key={index}>{item} </li> : '')
            }
          </ul>
        </div>
      );
    }
}

export default App;
