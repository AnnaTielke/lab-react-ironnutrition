import React, { Component } from 'react';
import Addform from './components/Addform';
import './App.css';
import data from './foods.json';
import 'bulma/css/bulma.css';
import Foodbox from './components/Foodbox';

class App extends Component {
  state = {
    food: data,
    showForm: false,
  };

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showForm: false });
  };

  render() {
    const { food } = this.state;
    return (
      <div>
        {this.state.showForm ? (
          <Addform onSubmit={this.handleSubmit} />
        ) : (
          <button onClick={this.handleShowForm} className="button is-info">
            Show form
          </button>
        )}

        {food.map((food) => {
          return <Foodbox anyfood={food} />;
        })}
      </div>
    );
  }
}

export default App;
