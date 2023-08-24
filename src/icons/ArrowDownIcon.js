import React from 'react';

const ArrowDownIcon = ({ className = '', width = '25', height = '25', stock="#0E1112" }) => ( 
  <svg className={className} width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.75 9.32275L13.9583 16.1144C13.1562 16.9165 11.8438 16.9165 11.0417 16.1144L4.25 9.32275" stroke={stock} stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default ArrowDownIcon;
