import React, { useState } from 'react';
import Counter from './Counter';
import css from './counterContainer.module.css';
import MenusButton from './MenusButton';
import PlusButton from './PlusButton';

export default function CounterContainer() {
  const [currentStep, setCurrentStep] = useState(0);
  const handleClick = (clickType) => {
    setCurrentStep(clickType === '+' ? currentStep + 1 : currentStep - 1);
  };

  return (
    <div className={css.divContainer}>
      <h1>Counter App</h1>
      <div>
        <MenusButton onClick={handleClick} className={css.space} />
        <Counter className={css.space} step={currentStep} />
        <PlusButton onClick={handleClick} className={css.space} />
      </div>

      <h5 className={css.footer}>By: Lucas Henrique</h5>
    </div>
  );
}
