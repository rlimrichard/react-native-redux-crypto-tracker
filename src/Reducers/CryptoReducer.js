import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errarMessage: null,
};

export default function (state=initialState, action){

  switch (action.type){
    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        hasError: false,
        errarMessage: null
      });

      case FETCHING_COIN_DATA_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          data: action.payload,
          hasError: false,
          errarMessage: null
        });

        case FETCHING_COIN_DATA_FAIL:
          return Object.assign({}, state, {
            isFetching: false,
            data: action.payload,
            hasError: true,
            errarMessage: action.err
          });

      default:
        return state;

  }


}
