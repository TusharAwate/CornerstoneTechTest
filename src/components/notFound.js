import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Title = styled.h2`
  font-size: 2.2em;
  margin: 0;
`

const Description = styled.p`
  font-size: 1em;
  color: #999;
  margin-bottom: 10px;
`

const Button = styled(Link)`
  color: #fff;
  margin-top: 20px;
  border-radius: 4px;
  padding: 10px 20px;
  display: block;
  text-decoration: none;
  text-decoration: uppercase;
`

const NotFound = () => (
  <Container>
    <Title>Page not found</Title>
    <Description>We are sorry but the page you are looking for does not exist.</Description>
    <Button to="/">Back to home</Button>
  </Container>
)

export default NotFound