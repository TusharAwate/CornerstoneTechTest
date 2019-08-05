/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  align-items: inherit;
  margin: 20px;
  padding: 20px;
  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Details = styled.div`
  display: block;
  align-items: center;
  margin: 20px;
  padding: 20px;
  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Name = styled.h2`
  font-size: 2.2em;
  margin: 5px 0;
`

const Tag = styled.span`
  font-size: 1em;
  color: #666;
`

const ABV = styled.p`
font-size: 0.8em;
color: #000;
font-weight: bold;
`

const Description = styled.p`
  font-size: 1em;
`

const Image = styled.figure`
  margin: 0;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5em;
  @media (max-width: 520px) {
    margin-left: 0;
    margin-top: 0;
  }
`

const Beer = props => (
  <Item>
    <Details>
      <Name>
          {props.name}
      </Name>
      <Image>
        <img 
          src={props.image_url} 
          alt={props.name} 
          width="auto"
          height="400"
        />
      </Image>
    </Details>
    <Info>
      <ABV>
        ABV: {props.abv}
      </ABV>
      <Tag>
        {props.tagline}
      </Tag>
      <Description>
        {props.description}
      </Description>
    </Info>
  </Item>
)

Beer.propTypes = {
  image_url: PropTypes.string,
  abv: PropTypes.string,
  name: PropTypes.string,
  tagline: PropTypes.string,
  description: PropTypes.string
}

export default Beer
