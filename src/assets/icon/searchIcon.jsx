import PropTypes from 'prop-types';

const SearchIcon = ({ color }) => (
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2_2484)">
<g clipPath="url(#clip1_2_2484)">
<path d="M11.7678 11.768C13.9157 9.62011 13.9157 6.1377 11.7678 3.98982C9.61996 1.84194 6.13756 1.84194 3.98967 3.98982C1.84179 6.1377 1.84179 9.62011 3.98967 11.768C6.13756 13.9159 9.61996 13.9159 11.7678 11.768Z" stroke={color} strokeWidth="3"/>
<path d="M13.5355 11.4144C12.9497 10.8287 12 10.8287 11.4142 11.4144C10.8284 12.0002 10.8284 12.95 11.4142 13.5358L14.9497 17.0713C15.5355 17.6571 16.4852 17.6571 17.071 17.0713C17.6568 16.4855 17.6568 15.5358 17.071 14.95L13.5355 11.4144Z" fill={color} />
</g>
</g>
<defs>
<clipPath id="clip0_2_2484">
<rect width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip1_2_2484">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
);

SearchIcon.propTypes = {
  color: PropTypes.string,
};

export default SearchIcon;