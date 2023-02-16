import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  margin-top: 2rem;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 13px;
`

const Main = () => (
  <Grid>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </Grid>
)

export default Main
