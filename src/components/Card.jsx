import React from 'react'
import styled from 'styled-components'

const Card = ({title,description,tasks}) => {
  return (
    <CardContainer>
  
      <h2>{title}</h2>
      <h5>{description}</h5>
      <p>{tasks}</p>

      <ButtonContainer>
      <ViewButton>View</ViewButton>
      <DeleteButton>Delete</DeleteButton>
      </ButtonContainer>
    </CardContainer>

  )
}

const CardContainer=styled.div`
    width: 260px;
    height: 260px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 10px 10px 5px grey;
    margin-right: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;

`

const ButtonContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;

`
const ViewButton=styled.button`
    border: none;
    outline: none;
    height: 40px;
    width: 100%;
    border: 1px solid lightgreen;
    border-radius: 99px;
    font-size: 17px;
    color: lightgreen;
    cursor:pointer;
    margin-bottom: 8px;
    background-color: transparent;

`

const DeleteButton=styled.button`
    border: none;
    outline: none;
    height: 40px;
    width: 100%;
    border: 1px solid red;
    border-radius: 99px;
    font-size: 17px;
    color: red;
    background-color: transparent;
    cursor:pointer;

`
export default Card
