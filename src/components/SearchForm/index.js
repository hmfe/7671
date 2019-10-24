import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Autocomplete from '../Autocomplete';
import History from '../History';
import LoadingSpinner from '../LoadingSpinner';
import {connect} from 'react-redux';

import {
  setSearchQuery,
  fetchData,
  addToHistory} from '../../actions/actionCreators';


const FormContainer = styled.div`
  width: 100%;
  display: block;
  margin-top: 30px;
`;

const Form = styled.form`
  width: 70%;
  margin: auto;
  position: relative;
`;

const ListContainer = styled.div`
  margin: 5px 0;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  background-color: #ffffff;
  display: flex;
`;

// Search history container //
const HistoryContainer = styled.div`
  top: 300px;
  margin: 15px 0;
  position: absolute;
  width: 100%;
`;
// ///////////////////////////////////////////////////

// Input for search //
const Input = styled.input`
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
  border: 0;
  padding: 0 15px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 20px;
`;
// ///////////////////////////////////////////////////
/**
 * Component for input form, autocomplete window and search history
 * @param {Object} props
 * @return {Object} jsx component.
 */
export function SearchForm(props) {
  // sort of container of application and a logic handler. For production version better to separate
  // presentational and js components and move all the background logic ( handleChange, [height, setHeight], etc.)
  // to separate container (smart) component
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    setHeight(`${Math.min(240, props.autocomplete.length * 40)}px`);
  }, [props.autocomplete.length]);

  /**
   * Function to handle changes in input
   * @param {Object} event Input form change event
   */
  function handleChange(event) {
    // minor improvements can be done
    // (cashing search results, searching only after 3 symbols entered, etc.)
    props.fetchData(event.target.value);
    props.setSearchQuery(event.target.value);
  }

  const hideAutocompleteForm = () => setHeight('0px');
  const showAutocompleteForm = () =>
    setHeight(`${Math.min(240, props.autocomplete.length * 40)}px`);

  return (
    <FormContainer>
      <Form>
        <Input
          type="text"
          value={props.searchQuery}
          onChange={handleChange}
          onBlur={hideAutocompleteForm}
          onFocus={showAutocompleteForm}
          placeholder="Type anything..."
        />
        <LoadingSpinner loading={props.loading}/>
        <ListContainer>
          {!props.loading &&
            <Autocomplete
              data={props.autocomplete}
              searchValue={props.searchQuery}
              handleClick={props.addToHistory}
              height={height}
            />
          }
        </ListContainer>

        <HistoryContainer>
          <History data={props.history}/>
        </HistoryContainer>

      </Form>
    </FormContainer>);
}

const mapStateToProps = (state) => ({
  autocomplete: state.autocomplete,
  history: state.history,
  searchQuery: state.searchQuery,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchQuery: (searchQuery) => dispatch(setSearchQuery(searchQuery)),
  fetchData: (searchQuery)=> dispatch(fetchData(searchQuery)),
  addToHistory: (searchQuery) => dispatch(addToHistory(searchQuery)),
});

SearchForm.propTypes = {
  autocomplete: PropTypes.array.isRequired,
  history: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  addToHistory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
