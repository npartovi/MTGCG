import { connect } from 'react-redux'
import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
  render() {
    if (loading) return <div>JWOEFPJWEOPFJWEFOPJWEF</div>
    const { cards, loading } = this.props
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

const mapStateToProps = state => ({
  cards: state.cards,
  loading: state.loading.global
})

export default connect(
  mapStateToProps,
  null
)(CardList)
