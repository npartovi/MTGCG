import mtg from "mtgsdk"
import {
    GET_ALL_CARDS
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