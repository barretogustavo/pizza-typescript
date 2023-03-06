import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'

const Container = styled.div``

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
  <Container>
    <Title>
      <h1>Pizzas</h1>
    </Title>
    <Cart />
  </Container>
)

export default Header
