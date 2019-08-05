/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  fetchBeers
} from '../../modules/beers'

// Styles
const Container = styled.div`
  height: 100%;
  margin: 0;
`

const Title = styled.h1`
  font-size: 2.4em;
  margin: 0 15px;
  @media (max-width: 520px) {
    font-size: 1.8em;
  }
`

const List = styled.div`
  display: block;
  flex-direction: column;
  margin: 15px;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 25px;
  border: 1px solid #e5e5e5;
  transition: background 0.2s ease-in-out;
  position: relative;
  width: 350px; 
  height: 400px; 
  margin: 10px; 
  display: inline-grid; 
  &:before {
    position: absolute;
    right: 25px;
    font-size: 0.9em;
    top: 52px;
    color: #666;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }
  }

  @media (max-width: 520px) {
    &:hover {
      &:before {
        opacity: 0;
      }
    }
  }
`

const Name = styled.h2`
  font-size: 1.6em;
  margin: 5px 0;
  @media (max-width: 520px) {
    font-size: 1.4em;
  }
`

const Image = styled.figure`
  margin: 0;
`

const MoreDetails = styled.span`
  font-size: 1em;
  color: #000;
  font-weight: bold;
  cursor: pointer;
`

const ABV = styled.p`
font-size: 0.8em;
color: #000;
font-weight: bold;
`

const Alert = styled.div`
  background: rgba(255, 4, 4, 0.68);
  color: #fff;
  padding: 15px 25px;
`

const Loading = styled.div`
  font-size: 1.4em;
  margin: 15px 25px;
`

// Create a class to BeersList Component
class BeersList extends Component {
  componentDidMount () {
    // Fetch all beers
    this.props.fetchBeers()
  }

  selectedBeer (beer) {
    // Selected beer go to details
    this.props.history.push(`/beers/${beer.id}`)
  }

  render () {
    const isLoading = this.props.isLoading
    const isError = this.props.isError
    return (
      <Container>
        {isError ? (
          <Alert>
            {this.props.errorMessage}
          </Alert>
        ) : ''}
        {isLoading ? (
          <Loading>
            Loading...
          </Loading>
        ) : (
          <List>
            <Title>
              PUNK BEERS
            </Title>
            {this.props.beersList.map((beer) => {
              const { id, name, abv, image_url } = beer
              return (
                <Item key={id}>
                  <Name>
                    {name}
                  </Name>  
                  <ABV>
                    ABV: {abv}
                  </ABV>
                  <Image>
                    <img 
                      src={image_url} 
                      alt={name} 
                      width="auto" 
                      height="150"
                    />
                  </Image>
                  <MoreDetails>
                    <a onClick={() => this.selectedBeer(beer)}>More Details</a>
                  </MoreDetails>
                </Item>
              )
            })}
          </List>
        )}
      </Container>
    )
  }
}

BeersList.propTypes = {
  fetchBeers: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  beersList: PropTypes.array
}

const mapStateToProps = ({ beers }) => ({
  beersList: beers.beersList,
  isLoading: beers.isLoading,
  isError: beers.isError,
  errorMessage: beers.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBeers
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersList)
