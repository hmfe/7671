import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import loadingSpinner from '../../../assets/loading-spinner.svg';

// Spinning circle displayed while data is loading //
const Loading = styled.div`
    z-index:30;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation:spin 0.5s linear infinite;
    background-image: url('${loadingSpinner}');
    background-position: center;
    background-size: contain;
    width: 50px;
    height: 50px;
`;
// //////////////////////////////////////////////////

const LoadingSpinner = ({loading}) => {
  return loading? <Loading/> : null;
};

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LoadingSpinner;
