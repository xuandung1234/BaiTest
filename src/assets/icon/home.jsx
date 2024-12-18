import PropTypes from 'prop-types';

const HomeIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 5px 2px 0' }}>
    <g clipPath="url(#clip0_2_2495)">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7279 2.27314L18.8054 9.39878C19.0332 9.59973 19.055 9.94729 18.854 10.1751C18.7496 10.2934 18.5994 10.3612 18.4416 10.3612H15.4981V16.9C15.4981 17.5075 15.0056 18 14.3981 18H11.6492L11.6496 14.1931C11.6496 13.3301 10.9868 12.6219 10.1425 12.5498L10.0002 12.5437C9.08926 12.5437 8.35081 13.2822 8.35081 14.1931L8.35019 18H5.60226C4.99475 18 4.50226 17.5075 4.50226 16.9V10.3612H1.55879C1.25503 10.3612 1.00879 10.115 1.00879 9.81123C1.00879 9.65341 1.07659 9.50319 1.19494 9.39878L9.2725 2.27314C9.68829 1.90635 10.3121 1.90635 10.7279 2.27314Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0_2_2495">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

HomeIcon.propTypes = {
  color: PropTypes.string,
};

export default HomeIcon;