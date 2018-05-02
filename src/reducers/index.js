import {combineReducers} from 'redux';
import TrelloReducer from './TrelloReducer';
import MoveCardReducer from './MoveCardReducer';

export default combineReducers({TrelloReducer});