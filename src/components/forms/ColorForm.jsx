import React, {Component} from 'react';
import {getCards} from '../../actions/mtgFilter';
import {connect} from 'react-redux';

class ColorForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            red: false,
            white: false,
            blue: false,
            green: false,
            black: false
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        let currVal = this.state[e.target.getAttribute('name')];
        this.setState({[e.target.getAttribute('name')]: !currVal});
    }

    onClick(e) {
        let colors = [];
        Object.keys(this.state).forEach((key) => {
            if (this.state[key]) {
                colors.push(key);
            }
        });
        this.props.getCards(colors)
            .then((res) => this.props.history.push("/deck"));

    }

    render(){
        return(
            <div onClick={this.onChange} className="card-color-container">
                    <div className="mana-button white" name="white" ></div>
                    <div className="mana-button blue" name="blue" ></div>
                    <div className="mana-button black" name="black" ></div>
                    <div className="mana-button red" name="red" ></div>
                    <div className="mana-button green" name="green" ></div>
                    <button onClick={this.onClick} type="submit">Generate Cards</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({cards: state.cards});

export default connect(mapStateToProps, {getCards})(ColorForm);