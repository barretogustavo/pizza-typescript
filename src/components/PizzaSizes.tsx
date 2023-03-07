import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const PizzaSizesArea = styled.div`
  display: inline-flex;
  background-color: #eee;
  border-radius: 10px;
  height: 40px;
`

const Size = styled.button<{ active: boolean }>`
  ${({ active }) => css`
    border: 0;
    background-color: ${active ? '#00bcd4' : 'transparent'};
    font-size: 13px;
    outline: 0;
    cursor: pointer;
    padding: 0px 10px;
    color: ${active ? '#fff' : '#000'};
    font-weight: bold;
    border-radius: 10px;

    &:hover {
      background-color: #ccc;
    }

    & > span {
      font-size: 12px;
      color: ${active ? '#fff' : '#999'};
      font-weight: normal;
    }
  `}
`
type Props = {
  sizes: string[]
  size: string
  setSize: React.Dispatch<React.SetStateAction<string>>
}

const PizzaSizes = ({ sizes, size, setSize }: Props) => {
  const handleClick = (activeSize: string) => {
    setSize(activeSize)
  }

  return (
    <PizzaSizesArea>
      <Size active={size === 'PEQUENA'} onClick={() => handleClick('PEQUENA')}>
        PEQUENA <span>{sizes[0]}</span>
      </Size>
      <Size active={size === 'MÉDIA'} onClick={() => handleClick('MÉDIA')}>
        MÉDIA <span>{sizes[1]}</span>
      </Size>
      <Size active={size === 'GRANDE'} onClick={() => handleClick('GRANDE')}>
        GRANDE <span>{sizes[2]}</span>
      </Size>
    </PizzaSizesArea>
  )
}

export default PizzaSizes
