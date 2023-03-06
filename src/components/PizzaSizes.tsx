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

const PizzaSizes = () => {
  const [activeSize, setActiveSize] = useState('')

  const handleClick = (size: string) => {
    setActiveSize(size)
  }

  return (
    <PizzaSizesArea>
      <Size
        active={activeSize === 'PEQUENA'}
        onClick={() => handleClick('PEQUENA')}
      >
        PEQUENA <span>320g</span>
      </Size>
      <Size
        active={activeSize === 'MÉDIA'}
        onClick={() => handleClick('MÉDIA')}
      >
        MÉDIA <span>530g</span>
      </Size>
      <Size
        active={activeSize === 'GRANDE'}
        onClick={() => handleClick('GRANDE')}
      >
        GRANDE <span>860g</span>
      </Size>
    </PizzaSizesArea>
  )
}

export default PizzaSizes
