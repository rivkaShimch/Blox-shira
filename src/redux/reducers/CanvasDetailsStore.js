
import { OPERATE } from '../actions/canvasActions';
import produce from 'immer'

const initialState = {
  canvasDetails: {

    name: "ll"
  }

};

export default produce((state, action) => {
  switch (action.type) {

    case 'NAME_CANVAS':
      state.canvasDetails.name = action.payload;
      break;
    default:
      return state;

  }
}, initialState);