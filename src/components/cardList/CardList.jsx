import {connect} from "react-redux" 
import React, {Component} from "react"
import Card from './Card'

class CardList extends Component {
    
    render() {
        
        const {cards} = this.props

        const cardListView = cards.map((card,idx) => (
            <Card key={idx} img={card.imageUrl} />
        ))
     

        return (
            <div>{cardListView}</div>
        );
    }
}


const mapStateToProps = state => ({
    cards: state.cards.cards
})

export default connect(mapStateToProps, null)(CardList);