import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {removeFromHistory, clearHistory} from '../../actions/actionCreators';
import {connect} from 'react-redux';

// Search history list //
const List = styled.ul`
  &:first-child {
    border-top: 1px solid #c4c4c450;
  }
`;

const ListElement = styled.li`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #c4c4c450;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Title = styled.span`
  flex-basis: 65%;
  align-self: flex-start;
  margin-left: 10px;
`;

const Date = styled.time`
  float: right;
  margin-right: 25px;
  flex-grow: 1;
  align-self: center;
  font-size: 18px;
  color: #c4c4c4;
`;

const Remove = styled.span`
  float: right;
  cursor: pointer;
  flex-basis: 15px;
  align-self: center;
  margin-right: 10px;
`;
// //////////////////////////////////////////////////

// Search history and clear history block //
const SearchTitleContainer = styled.header`
  display: block;
  padding: 20px 0;
`;

const SearchTitle = styled.title`
  font-weight: 900;
  display: inline-block;
`;

const ClearHistory = styled.span`
  font-weight: 900;
  display: inline-block;
  float: right;
  font-size: 15px;
  text-decoration: underline;
  color: #00000090;
  line-height: 20px;
  cursor: pointer;
`;
// //////////////////////////////////////////////////

/**
 * Get list of autocomplete suggestions.
 * @param {Array} data Data to put in the search history.
 * @param {function} removeFromHistory Function to dispatch action
 * for removing element from history.
 * @param {function} clearHistory Function to dispatch action
 * for clearing history.
 * @return {Array | Object} jsx component.
 */
function History({data, removeFromHistory, clearHistory}) {
  /**
   * Get history search list.
   * @param {Array} data Data to put in the list.
   * @return {Array | Object} Array of jsx components to put in a list.
   */
  function renderOptions(data) {
    return data.map((el, ind) => <ListElement key={ind}>
      <Title> {el.searchQuery} </Title>
      <Date> {el.time} </Date>
      <Remove onClick={() => removeFromHistory(el.id)}> &#10006; </Remove>
    </ListElement> );
  }

  return data.length ? (
      <Fragment>
        <SearchTitleContainer>
          <SearchTitle> Search history </SearchTitle>
          <ClearHistory onClick={clearHistory}>
            Clear search history
          </ClearHistory>
        </SearchTitleContainer>

        <List>
          {renderOptions(data)}
        </List>
      </Fragment>
  ) : [];
}

const mapDispatchToProps = (dispatch) => ({
  removeFromHistory: (id) => dispatch(removeFromHistory(id)),
  clearHistory: () => dispatch(clearHistory()),
});

History.propTypes = {
  data: PropTypes.array.isRequired,
  removeFromHistory: PropTypes.func.isRequired,
  clearHistory: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(History);
