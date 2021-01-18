import React from 'react';
import css from './counterContainer.module.css';

export default function Counter(props) {
  return <span className={css.space}>{props.step}</span>;
}
