import {connect} from "react-redux" 
import React, {Component} from "react"
import Card from './Card'

class CardList extends Component {
    
    render() {
<<<<<<< HEAD
        console.log(this.props.cards);

        
=======
        
        const {cards} = this.props

        const cardListView = cards.map((card,idx) => (
            <Card key={idx} img={card.imageUrl} />
        ))
     

>>>>>>> 48bf1421ce4b731b1acada1bb3c80cb74359051c
        return (
            <div>{cardListView}</div>
        );
    }
}


const mapStateToProps = state => ({
    cards: state.cards.cards
})

export default connect(mapStateToProps, null)(CardList);