import React, { Component } from 'react';
import Counter from './Counter';
import css from './counterContainer.module.css';
import MenusButton from './MenusButton';
import PlusButton from './PlusButton';

export default class CounterContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentStep: 0,
    };
  }

  handleClick = (clickType) => {
    const { currentStep } = this.state;

    this.setState({
      currentStep: clickType === '+' ? currentStep + 1 : currentStep - 1,
    });
  };

  render() {
    return (
      <div className={css.divContainer}>
        <h1>Counter App</h1>
        <div>
          <MenusButton onClick={this.handleClick} className={css.space} />
          <Counter className={css.space} step={this.state.currentStep} />
          <PlusButton onClick={this.handleClick} className={css.space} />
        </div>

        <h5 className={css.footer}>By: Lucas Henrique</h5>
      </div>
    );
  }
}
