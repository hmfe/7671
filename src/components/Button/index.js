import React from 'react';
import styled from 'styled-components';

// button styles, fixed position is              //
// for conveniently placing, not for production  //
const ButtonStyled = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;

  color: #000000;
  height: 130px;
  width: 260px;
  text-align: left;
  padding-left: 10px;
  font-size: 28px;
  font-weight: 900;
  font-family: Arial, sans-serif;
  background-color: #f2a64f;
  border: 3px solid #83817f;
  cursor: pointer;
  ::after {
    content: "\\2716";
    text-align: center;
    border: 0px solid #ffffff;
    background-color: #ffffff;
    border-radius: 100%;
    width: 105px;
    height: 105px;
    font-size: 50px;
    line-height: 102px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0%, -50%);
  }
  :hover:after {
    background-color: #FFEFDC;
  }
`;
// ////////////////////////////////////////////////////
/**
 * 1 task button omponent
 * @return {Object} jsx component.
 */
function Button() {
  return <ButtonStyled onClick={()=>alert('Delete')}> Delete </ButtonStyled>;
}
export default Button;
