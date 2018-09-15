import {connect} from "react-redux" 
import React, {Component} from "react"
import Card from './Card'

class CardList extends Component {
    constructor(props){
        super(props)

        this.changeCard = this.changeCard.bind(this)
    }

    changeCard(e){
        console.log("hello")
        console.log(e.target)
    }
    
    render() {
        
        const {cards} = this.props

        const cardListView = cards.map((card,idx) => (
            <Card key={idx} img={card.imageUrl} />
        ))
     
        return <div onClick={this.changeCard}>{cardListView}</div>;
    }
}


const mapStateToProps = state => ({
    cards: state.cards.cards
})

export default connect(mapStateToProps, null)(CardList);