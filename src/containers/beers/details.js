/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  fetchBeerDetails,
  resetState
} from '../../modules/beers'

import Toolbar from '../../components/toolbar'
import Beer from '../../components/beer'

// Styles
const Container = styled.div`
  height: 100%;
  margin: 0;
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

// Create a class to BeerDetails Component
class BeerDetails extends Component {
  componentDidMount () {
    // Get the params id
    const beerId = this.props.match.params.id
    // Pass id to fetch beer details in API
    this.props.fetchBeerDetails(beerId)
  }

  componentWillUnmount () {
    // Reset state to component unmount
    this.props.resetState()
  }

  render () {
    const beer = this.props.beerDetails[0] || ''
    const isLoading = this.props.isLoading
    const isError = this.props.isError
    return (
      <Container>
        <Toolbar
          title="Beer Details"
          isDetails
        />
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
          <Beer
            name={beer.name}
            abv={beer.abv}
            image_url={beer.image_url}
            tagline={beer.tagline}
            description={beer.description}
          />
        )}
      </Container>
    )
  }
}

BeerDetails.propTypes = {
  fetchBeerDetails: PropTypes.func,
  resetState: PropTypes.func,
  match: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  beerDetails:  PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

const mapStateToProps = ({ beers }) => ({
  beerDetails: beers.beerDetails,
  isLoading: beers.isLoading,
  isError: beers.isError,
  errorMessage: beers.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBeerDetails,
  resetState
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerDetails)
