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

  handleAddFood = (food) => {
    this.setState({
      food: [food, ...this.state.food],
    });
  };

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, calories, image } = e.target;
    let newFood = {
      name: name.value,
      calories: calories.value,
      image: image.value,
    };
    this.setState({ showForm: false }, () => {
      this.handleAddFood(newFood);
    });
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
