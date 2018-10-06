import mtg from "mtgsdk";
import axios from 'axios';
import {
    GET_ALL_CARDS,
    GET_CARD,
} from "./types";


const COLOR_MAP = {
    red: 'r',
    blue: 'u',
    black: 'b',
    white: 'w',
    green: 'g'
};

export const getRandomCards = (colors) => (dispatch) => {
    let inColors = "";
    colors.forEach((color) => {
        inColors += COLOR_MAP[color];
    });

    let allColors = "grbuw";
    let outColors = "";

    allColors.split('').forEach((color) => {
        if (!inColors.includes(color)) {
            outColors += color;
        }
    });

    axios.get(`https://api.scryfall.com/cards/search?unique=cards&q=color>=${inColors}&-c:${outColors}`)
    .then((res) => {
        dispatch({
            type: GET_ALL_CARDS,
            payload: res.data.data, 
            colors: {
                inColors,
                outColors
            }
        });
    });
};

export const getRandomCard = (colors, idx) => (dispatch) => {
    axios
        .get(`https://api.scryfall.com/cards/random?q=color>=${colors.inColors} -c:${colors.outColors}`)
        .then(res => { 
            dispatch({
                type: GET_CARD,
                payload: {
                    card: res.data,
                    idx
                }
            });
        });
};