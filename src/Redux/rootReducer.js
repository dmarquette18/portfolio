import { combineReducers } from 'redux'
import reducer from '../DesignPortfolio/Videography/store/store'
import graphicReducer from '../DesignPortfolio/Graphics/store/store'
import videographyReducer from '../DesignPortfolio/Videography/store/store'

export default combineReducers({
  graphicReducer,
  videographyReducer
});