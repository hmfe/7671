import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// autocomplete list styles  //
const List = styled.ul`
  padding: 0 15px;
  height: ${(props) => props.height};
  overflow-y: scroll;
  transition: all 0.3s ease;
  flex-basis: 100%;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ListElement = styled.li`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
// ////////////////////////////////////////////////////
/**
 * Input autocomplete component.
 * @return {Object} Autocomplete component.
 */
function Autocomplete({data, searchValue='', handleClick, height}) {
  /**
   * Get list of autocomplete suggestions.
   * @param {Array} data Data to put in the list.
   * @return {Array | Object} jsx component.
   */
  function renderOptions(data) {
    return data.length ?
      data.map((el, ind) => {
        return (
          <ListElement
            key={ind}
            onMouseDown={()=>{
              handleClick(el);
            }}>
            <b>{searchValue}</b>
            {el.substr(searchValue.length)}
          </ListElement>);
      }) :
      null;
  }

  return <List height={height}> {renderOptions(data)} </List>;
}

Autocomplete.propTypes = {
  data: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Autocomplete;
