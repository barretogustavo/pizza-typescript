import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'

const Container = styled.div``

const Title = styled.h1`
  width: 50%;
  height: 50px;
  text-align: left;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;
  font-size: 1.8rem;
  color: #171718;
`

const Header = () => (
  <Container>
    <Title>🍕 PizzaMania</Title>
    <Cart />
  </Container>
)

export default Header
