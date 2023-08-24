import React from 'react';

const SearchIcon = ({ className = '', width = '15', height = '15', fill="#000" }) => ( 
  <svg className={className} width={width} height={height} viewBox="0 0 15 16" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_90_1785)">
      <path d="M9.5 0.75C6.45 0.75 4 3.2 4 6.25C4 7.6 4.5 8.8 5.25 9.75L0.15 14.9C-0.05 15.1 -0.05 15.4 0.15 15.6C0.35 15.8 0.65 15.8 0.85 15.6L6 10.5C6.95 11.3 8.2 11.75 9.5 11.75C12.55 11.75 15 9.3 15 6.25C15 3.2 12.55 0.75 9.5 0.75ZM9.5 10.75C7 10.75 5 8.75 5 6.25C5 3.75 7 1.75 9.5 1.75C12 1.75 14 3.75 14 6.25C14 8.75 12 10.75 9.5 10.75Z"/>
    </g>
    <defs>
      <clipPath id="clip0_90_1785">
        <rect width="15" height="15" fill="white" transform="translate(0 0.75)"/>
      </clipPath>
    </defs>
  </svg>
);

export default SearchIcon;
