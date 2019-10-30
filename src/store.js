import {createStore, applyMiddleware} from 'redux';
import formReducer from './reducers/formReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

/**
   * Function to create redux store
   * @param {Object} state Default store
   * @return {Object} store
   */
function configureStore(state = {
  history: [],
  autocomplete: [],
  searchQuery: '',
  loading: false}) {
  return createStore(
      formReducer,
      state,
      composeWithDevTools(applyMiddleware(thunk)));
}

export default configureStore;
