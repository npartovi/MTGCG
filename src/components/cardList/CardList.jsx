import {connect} from "react-redux" 
import React, {Component} from "react"
import Card from './Card'


class CardList extends Component {

    render() {
        const {cards} = this.props;
        let cardsWithImg = cards.filter ((card) => card.image_uris).slice(0, 60);
        const cardListView = cardsWithImg.map((card,idx) => {
            if (card.image_uris) {
                return <Card key={idx} card={card} index={idx}/>;
            }
        });
        return (
            <div className="card-list-container" >
                {cardListView}
            </div>
        );
    }
}




const mapStateToProps = state => ({
    cards: state.cards
});

export default connect(mapStateToProps, null)(CardList);