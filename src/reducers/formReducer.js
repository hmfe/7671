/**
 * Function to get current date in yyy-mm-dd h:mm AM/PM format
 * @return {string} Current time in proper format
 */
function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours ? hours : 12;

  return `
  ${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

export default (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    case 'SET_LIST_OPTIONS':
      return {
        ...state,
        autocomplete: action.data,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.status,
      };
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        history: state.history.concat({
          searchQuery: action.searchQuery,
          time: getCurrentDate(),
          id: state.history.length}),
      };
    case 'REMOVE_FROM_HISTORY':
      return {
        ...state,
        history: state.history.filter((el) => el.id !== action.id),
      };
    case 'CLEAR_HISTORY':
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};
