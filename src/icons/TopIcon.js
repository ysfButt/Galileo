import React from 'react';

const TopIcon = ({ className = '', width = '25', height = '25', stock="#0066B1" }) => ( 
  <svg className={className} width={width} height={height} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3333 12.1665L20.8333 4.6665M20.8333 4.6665H16.3801M20.8333 4.6665V9.11963" stroke={stock} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.8334 12.9998C20.8334 16.9282 20.8334 18.8924 19.613 20.1128C18.3926 21.3332 16.4285 21.3332 12.5001 21.3332C8.57171 21.3332 6.60753 21.3332 5.38714 20.1128C4.16675 18.8924 4.16675 16.9282 4.16675 12.9998C4.16675 9.07147 4.16675 7.10728 5.38714 5.88689C6.60753 4.6665 8.57171 4.6665 12.5001 4.6665" stroke={stock} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default TopIcon;
