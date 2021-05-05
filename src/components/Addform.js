import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Addform extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit} noValidate autoComplete="off">
          <input
            name="name"
            class="input is-normal"
            type="text"
            placeholder="Name"
          />
          <input
            name="calories"
            class="input is-normal"
            type="text"
            placeholder="calories"
          />
          <input
            name="image"
            class="input is-normal"
            type="text"
            placeholder="Image"
          />
          <button type="submit" className="button is-info">
            Add Food
          </button>
        </form>
      </div>
    );
  }
}

export default Addform;
