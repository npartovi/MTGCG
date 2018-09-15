import {connect} from "react-redux" 
import React, {Component} from "react"
import Card from './Card'

class CardList extends Component {
    
    render() {
        
        
        return (
            <div>This is the cards list view</div>
        );
    }
}


const mapStateToProps = state => ({
    cards: state.cards
})

export default connect(mapStateToProps, null)(CardList);