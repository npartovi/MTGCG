import mtg from "mtgsdk"
import axios from 'axios'
import {
    GET_ALL_CARDS,
    GET_CARD
} from "./types"


export const getCards = (colors) => (dispatch) => {

    let colorString = colors.join(",");

    return mtg.card.where({ colors: colorString })
        .then(cards => {
            dispatch({
                type: GET_ALL_CARDS,
                payload: cards                
            })
        })

}

export const getRandomCard = (color) => dispatch => {

    axios
        .get("https://api.magicthegathering.io/v1/cards?pageSize=1&random=true&colors=black")
        .then(res => console.log(res.data))
}

