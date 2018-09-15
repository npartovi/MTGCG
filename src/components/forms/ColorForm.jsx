import React, {Component} from 'react'
import {getCards} from '../../apiRoutes/mtgFilter'

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
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        let currVal = this.state[e.target.value];
        this.setState({[e.target.value]: !currVal});
    }

    onSubmit(e) {
        e.preventDefault();
        let colors = [];
        Object.keys(this.state).forEach((key) => {
            if (this.state[key]) {
                colors.push(key);
            }
        });

        let cardRes = getCards(colors)    

    }

    render(){
        console.log(this.state);
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Red
                        <input onChange={this.onChange} type="checkbox" value="red"></input>
                    </label>
                    <label>
                        Blue
                        <input onChange={this.onChange} type="checkbox" value="blue"></input>
                    </label>
                    <label>
                        White
                        <input onChange={this.onChange} type="checkbox" value="white"></input>
                    </label>
                    <label>
                        Black
                        <input onChange={this.onChange} type="checkbox" value="black"></input>
                    </label>
                    <label>
                        Green
                        <input onChange={this.onChange} type="checkbox" value="green"></input>
                    </label>
                    <button type="submit">Generate Cards</button>
                </form>
            </div>
        )
    }
}

export default ColorForm