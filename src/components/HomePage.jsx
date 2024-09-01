import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>My Activities </h1><br />
    <CardsContainer>
    <Card title='Personal tasks' description={'asdgaysfcianiu'} tasks={'learn react'}/>
      <Card title='Personal tasks' description={'asdgaysfcianiu'} tasks={'learn react'}/>
      <Card title='Personal tasks' description={'asdgaysfcianiu'} tasks={'learn react'}/>
      <Card title='Personal tasks' description={'asdgaysfcianiu'} tasks={'learn react'}/>
    </CardsContainer>
    </HomePageContainer>
  )
}
const HomePageContainer=styled.div`
padding:20px;

`
const CardsContainer=styled.div`
    display: flex;
    padding: 10px;
`
export default HomePage
