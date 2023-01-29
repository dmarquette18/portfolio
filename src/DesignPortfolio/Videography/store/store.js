import { createStore } from 'redux';

const initialState = {
  selectedItems: []
};

const ADD_VIDEO = 'ADD_VIDEO';
const REMOVE_VIDEO = 'REMOVE_VIDEO';

function graphicReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VIDEO:
      return { ...state, selectedItems: [...state.selectedItems, action.payload] };
    case REMOVE_VIDEO:
      return { ...state, selectedItems: []};
    default:
      return state;
  }
}

export default graphicReducer;