import React from 'react'
import styled from 'styled-components'
import PizzaCard from './PizzaCard'

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  margin-top: 2rem;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 13px;
`

const Main = () => (
  <Grid>
    <PizzaCard />
    <PizzaCard />
    <PizzaCard />
    <PizzaCard />
    <PizzaCard />
    <PizzaCard />
    <PizzaCard />
  </Grid>
)

export default Main
