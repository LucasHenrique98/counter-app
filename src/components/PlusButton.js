import React, { Component } from 'react';
import css from './counterContainer.module.css';

export default class PlusButton extends Component {
  handleClick = () => {
    this.props.onClick('+');
  };
  render() {
    return (
      <button
        onClick={this.handleClick}
        className={(css.space, css.plusButton)}
      >
        +
      </button>
    );
  }
}
