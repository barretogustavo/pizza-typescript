import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import PizzaContext from '../context'

const QtdItemArea = styled.div`
  display: inline-flex;
  background-color: #eee;
  border-radius: 10px;
  height: 30px;
`

const ButtonDecrement = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 17px;
  outline: 0;
  cursor: pointer;
  padding: 0px 10px;
  color: #333;
`

const QtdItem = styled.p`
  line-height: 30px;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 5px;
  color: #000;
`

const ButtonIncrement = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 17px;
  outline: 0;
  cursor: pointer;
  padding: 0px 10px;
  color: #333;
`

type Props = {
  counter: number
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

const Increment = ({ counter, setCounter }: Props) => {
  return (
    <QtdItemArea>
      <ButtonDecrement onClick={() => counter !== 1 && setCounter(counter - 1)}>
        -
      </ButtonDecrement>
      <QtdItem>{counter}</QtdItem>
      <ButtonIncrement onClick={() => setCounter(counter + 1)}>
        +
      </ButtonIncrement>
    </QtdItemArea>
  )
}

export default Increment
