import jsonp from 'jsonp';
import {
  SET_SEARCH_QUERY,
  SET_LIST_OPTIONS,
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY,
  CLEAR_HISTORY,
  SET_LOADING} from './actionTypes';

/**
 * Action creator for typing in input field event.
 * @param {string} searchQuery Input field value.
 * @return {Object} The corresponding action.
 */
export function setSearchQuery(searchQuery) {
  return {type: SET_SEARCH_QUERY, searchQuery};
}

/**
 * Action creator for setting autocomplete list.
 * @param {array} data Data to display in autocomplete list.
 * @return {Object} The corresponding action.
 */
export function setListOptions(data) {
  return {type: SET_LIST_OPTIONS, data};
}

/**
 * Action creator for adding search request to the history.
 * @param {string} searchQuery The search request.
 * @return {Object} The corresponding action.
 */
export function addToHistory(searchQuery) {
  return {type: ADD_TO_HISTORY, searchQuery};
}

/**
 * Action creator for removing item from search history.
 * @param {number} id ID of event to remove.
 * @return {Object} The corresponding action.
 */
export function removeFromHistory(id) {
  return {type: REMOVE_FROM_HISTORY, id};
}

/**
 * Action creator for status of data loading.
 * @param {boolean} status Is data loading or not.
 * @return {Object} The corresponding action.
 */
export function setLoading(status) {
  return {type: SET_LOADING, status};
}

/**
 * Action creator for clearing history.
 * @return {Object} The corresponding action.
 */
export function clearHistory() {
  return {type: CLEAR_HISTORY};
}

/**
 * Action creator for loading data.
 * @param {string} searchQuery Search request.
 * @return {Object} The corresponding action.
 */
export function fetchData(searchQuery) {
  return (dispatch) => {
    if (searchQuery.length) {
      dispatch(setLoading(true));
      //jsonp used to access wiktionary api
      jsonp('https://en.wiktionary.org/w/api.php?action=opensearch&search='+searchQuery, null, (err, data) => {
        if (err) {
          console.error(err.message);
          dispatch(setLoading(false));
        } else {
          dispatch(setListOptions(data[1]));
          dispatch(setLoading(false));
        }
      });
    }
    if (!searchQuery.length) {
      dispatch(setListOptions([]));
    }
  };
}
