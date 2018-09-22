import { connect } from 'react-redux'
import React, { Component } from 'react'
import Card from './Card'
import Spinner from '../shared/Spinner'

class CardList extends Component {
  render() {
    const { cards, loading } = this.props
    if (loading) return <Spinner />
    const cardListView = cards.map((card, idx) => (
      <Card key={idx} card={card} index={idx} />
    ))
    return (
      <div
        className="card-list-container"
        onClick={this.changeCard}
      >
        {cardListView}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    cards: state.cards,
    loading: state.loading.global
  }
}

export default connect(
  mapStateToProps,
  null
)(CardList)
