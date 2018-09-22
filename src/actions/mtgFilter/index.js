import mtg from 'mtgsdk';
import axios from 'axios';
import { GET_ALL_CARDS, GET_CARD } from './types';
import {
  START_FETCHING,
  FETCH_SUCCESS
} from '../loading/types';

export const getCards = colors => dispatch => {
  dispatch({
    type: START_FETCHING
  });
  let colorString = colors
    .filter(el => el !== 'null')
    .join(',');
  return mtg.card
    .where({ colors: colorString, contains: 'imageUrl' })
    .then(cards => {
      dispatch({ type: FETCH_SUCCESS });
      dispatch({
        type: GET_ALL_CARDS,
        payload: cards,
        colors: colorString
      });
    });
};

export const getRandomCard = (colors, idx) => dispatch => {
  axios
    .get(
      `https://api.magicthegathering.io/v1/cards?pageSize=1&random=true&colors=${colors}`
    )
    .then(res => {
      dispatch({
        type: GET_CARD,
        payload: {
          card: res.data.cards[0],
          idx
        }
      });
    });
};
