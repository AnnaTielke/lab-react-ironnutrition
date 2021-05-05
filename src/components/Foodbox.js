import React, { Component } from 'react';

import 'bulma/css/bulma.css';

class Foodbox extends Component {
  render() {
    const { name, calories, image } = this.props.anyfood;

    return (
      <div>
        <div>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={image} alt="yummy food" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{name}</strong> <br />
                    <small>{calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value="1" />
                  </div>
                  <div className="control">
                    <form noValidate autoComplete="off">
                      <button type="submit" className="button is-info">
                        +
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Foodbox;
