import React, { useState } from 'react'
import styled from "styled-components";


const NumberSelecter = () => {

  const arraynum=[1,2,3,4,5,6];
  const [selectednum, setSelectednum]= useState();

  
  return (
    <Numselctcon>
    <div className="flex">
      {
        arraynum.map((value,i)=>(<Box isselected={value==selectednum} key={i} onClick={() => setSelectednum(value)}>{value}</Box>))
      }
    
    </div>
    <p>Select Number</p>
    </Numselctcon>
  )
}

export default NumberSelecter





const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
cursor: pointer;
background-color: ${(props)=> props.isselected ? "black" : "white"} ;
color: ${(props)=> (!props.isselected ? "black" : "white")} ;

`;

const Numselctcon =styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
  display: flex;
  gap: 24px;
}
p{
  font-size: 24px;
  font-weight: 700;
}`;