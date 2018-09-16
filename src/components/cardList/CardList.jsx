import {connect} from "react-redux" 
import React, {Component} from "react"
import Card from './Card'


class CardList extends Component {
    constructor(props){
        super(props);

    }

    render() {

        const cardListView;

        if(!this.props.cards){
            return null
        } else{
            const {cards} = this.props;

            cardListView = cards.map((card,idx) => (
                <Card key={idx} card={card} index={idx}/>
            ))
        }
        
     
        return (
            <div onClick={this.changeCard}>{cardListView}</div>
        );
    }
}


const mapStateToProps = state => ({
    cards: state.cards.cards
})

export default connect(mapStateToProps, null)(CardList);