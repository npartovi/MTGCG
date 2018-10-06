import React, { Component } from 'react';
import { getRandomCard } from '../../actions/mtgFilter';
import { connect } from 'react-redux';

class Card extends Component {
  constructor(props) {
    super(props);
    this.changeCard = this.changeCard.bind(this);
  }

  changeCard(e) {
    this.props.getRandomCard(this.props.colors, this.props.index);
  }

  render() {
    const { small } = this.props.card.image_uris;

    return (
      <div className="card-item" onClick={this.changeCard}>
        <img alt="" src={small} />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  colors: state.colors
});

export default connect(
  mapStatetoProps,
  { getRandomCard }
)(Card);
