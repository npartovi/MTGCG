import mtg from "mtgsdk"
import axios from 'axios'
import {
    GET_ALL_CARDS,
    GET_CARD,
    SET_COLORS
} from "./types"


let obj = {
    "G": ""
};


export const getCards = (colors) => (dispatch) => {

    let colorString = colors.join(",");

    return mtg.card.where({ colors: colorString })
        .then(cards => {
            dispatch({
                type: GET_ALL_CARDS,
                payload: cards, 
                colors: colorString                
            });
        });

};

export const getRandomCard = (colors, idx) => dispatch => {
    axios
        .get(`https://api.magicthegathering.io/v1/cards?pageSize=1&random=true&colors=${colors}`)
        .then(res => {
            console.log(res);
            dispatch({
                type: GET_CARD,
                payload: {
                    card: res.data.cards[0],
                    idx
                }
            });
        });
};
