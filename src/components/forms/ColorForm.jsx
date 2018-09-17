import React, {Component} from 'react';
import {getCards} from '../../actions/mtgFilter';
import {connect} from 'react-redux';
import classnames from 'classnames'

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
    }

    render(){
        return(
            <div onClick={this.onChange} className="card-color-container">
                    <div className={classnames("mana-button white",{"checked glow-white" : this.state.white})} name="white" ></div>
                    <div className={classnames('mana-button blue',{'checked glow-blue' : this.state.blue})} name="blue" ></div>
                    <div className={classnames('mana-button black', {'checked glow-black' : this.state.black})} name="black" ></div>
                    <div className={classnames('mana-button red', {'checked glow-red' : this.state.red})} name="red" ></div>
                    <div className={classnames('mana-button green', {'checked glow-green' : this.state.green})} name="green" ></div>
                    <button className="generate-button" onClick={this.onClick} type="submit">Generate Cards</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({cards: state.cards});

export default connect(mapStateToProps, {getCards})(ColorForm);