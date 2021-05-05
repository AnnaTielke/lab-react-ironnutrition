import React, { Component } from 'react';

import './App.css';
import data from './foods.json';
import 'bulma/css/bulma.css';
import Foodbox from './components/Foodbox';

class App extends Component {
  state = {
    food: data,
  };

  render() {
    const { food } = this.state;
    return (
      <div>
        {food.map((food) => {
          return <Foodbox anyfood={food} />;
        })}
      </div>
    );
  }
}

export default App;
