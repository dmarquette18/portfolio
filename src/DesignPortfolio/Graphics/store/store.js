import { createStore } from 'redux';

const initialState = {
  selectedItems: []
};

const ADD_GRAPHIC = 'ADD_GRAPHIC';
const REMOVE_GRAPHIC = 'REMOVE_GRAPHIC';

function graphicReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GRAPHIC:
      console.log("what just happened");
      return { ...state, selectedItems: [...state.selectedItems, action.item] };
    case REMOVE_GRAPHIC:
      console.log("hereBB")
      return { ...state, selectedItems: []};
    default:
      return state;
  }
}

export default graphicReducer;