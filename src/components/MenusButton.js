import React from 'react';
import css from './counterContainer.module.css';

export default function MenusButton(props) {
  const handleClick = () => {
    props.onClick('-');
  };

  return (
    <button onClick={handleClick} className={(css.space, css.menusButton)}>
      -
    </button>
  );
}
