import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  width: 100%;
  height: 50px;
  text-align: left;
  padding: 1rem;

  & > h1 {
    margin-bottom: 1rem;
  }
`

const Header = () => (
  <Title>
    <h1>Pizzas</h1>
    <hr />
  </Title>
)

export default Header
