import {connect} from "react-redux" 
import React, {Component} from "react"
import Card from './Card'
import {getRandomCard} from '../../actions/mtgFilter'

class CardList extends Component {
    constructor(props){
        super(props)

        this.changeCard = this.changeCard.bind(this)
    }

    changeCard(e){
        console.log(e.target)
        // this.props.getRandomCard()
    }
    
    render() {
        
        const {cards} = this.props

        const cardListView = cards.map((card,idx) => (
            <Card onClick={this.changeCard}  key={idx} img={card.imageUrl} colorIdentity={card.colorIdentity} />
        ))
     
        return (
            <div >{cardListView}</div>
        );
    }
}


const mapStateToProps = state => ({
    cards: state.cards.cards
})

export default connect(mapStateToProps, {getRandomCard})(CardList);