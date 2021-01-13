import React, { Component } from 'react';
import css from './counterContainer.module.css';

export default class Counter extends Component {
  render() {
    return <span className={css.space}>{this.props.step}</span>;
  }
}
