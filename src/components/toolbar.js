/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f1f1f1;
`

const Button = styled(Link)`
  font-size: 1em;
  background: none;
  padding: 5px 12px;
  margin: 0 15px;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    background: transparent;
    border-color: #000;
    color: #000;
  }
`

const Toolbar = props => (
  <Header>
    {props.isDetails ? (
      <Button to="/">
       Back
      </Button>
    ) : (
      <Button to="/">
        back to home
      </Button>
    )}
  </Header>
)

Toolbar.propTypes = {
  isDetails: PropTypes.bool
}

export default Toolbar
