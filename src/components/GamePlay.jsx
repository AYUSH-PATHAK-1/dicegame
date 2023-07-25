import React from 'react'
import TotalScore from './TotalScore'
import NumberSelecter from './NumberSelecter'
import { styled } from 'styled-components'
import RoleDice from './RoleDice'

const GamePlay = () => {
  return (
    <Mainconatainer>
      <div className="top_section">
    <TotalScore/>
    <NumberSelecter/>
    </div>
    <RoleDice/>
    </Mainconatainer>
  )
}

export default GamePlay



const Mainconatainer=styled.main`
padding-top: 70px;
.top_section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}
`;