import React, { useState } from 'react';
import styled from 'styled-components';

const RoleDice = () => {
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    const randomNum = generateRandomNum(1, 6);
    setCurrentDice(randomNum);
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
