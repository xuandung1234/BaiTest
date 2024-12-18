

import PropTypes from 'prop-types';

const Filter = ({ color }) => (
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.56763 3.28711H16.3926C16.8344 3.28711 17.1926 3.64528 17.1926 4.08711C17.1926 4.25849 17.1375 4.42534 17.0356 4.56309L12.2109 11.0808V15.0604L8.74932 17.2871V11.0808L3.92463 4.56309C3.66176 4.20797 3.73653 3.70699 4.09165 3.44411C4.2294 3.34215 4.39625 3.28711 4.56763 3.28711Z" fill={color} />
  </svg>
);

Filter.propTypes = {
  color: PropTypes.string,
};

export default Filter;