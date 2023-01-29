
import { createStore } from 'redux';

import rootReducer from './rootReducer';

const storeInitial = () => {
  const holder = createStore(rootReducer)
  return holder;
}




export default storeInitial();