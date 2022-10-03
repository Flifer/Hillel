import {
  ACTION_USERS_FETCH_LIST,
  ACTION_ALBUM_FETCH_LIST,
  ACTION_PHOTOS_FETCH_LIST,
} from "../actions/users";
  
  const INITIAL_STATE = [];
  
  export default function todos(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
      case ACTION_USERS_FETCH_LIST:
        return [...payload];
      case ACTION_ALBUM_FETCH_LIST:
        return [...payload];
      case ACTION_PHOTOS_FETCH_LIST:
        return [...payload];
      default:
        return state;
    }
  }