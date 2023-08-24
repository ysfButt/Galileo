import React from 'react';

const ResizeIcon = ({ className = '', width = '28', height = '28', stock="#000" }) => ( 
  <svg className={className} width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 13.9997L18.6667 9.33301M18.6667 9.33301H15.1667M18.6667 9.33301V12.833" stroke={stock} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14.0003L9.33333 18.667M9.33333 18.667H12.8333M9.33333 18.667V15.167" stroke={stock} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.6665 14.0003C4.6665 9.60055 4.6665 7.40066 6.03334 6.03383C7.40017 4.66699 9.60006 4.66699 13.9998 4.66699C18.3996 4.66699 20.5995 4.66699 21.9663 6.03383C23.3332 7.40066 23.3332 9.60055 23.3332 14.0003C23.3332 18.4001 23.3332 20.6 21.9663 21.9668C20.5995 23.3337 18.3996 23.3337 13.9998 23.3337C9.60006 23.3337 7.40017 23.3337 6.03334 21.9668C4.6665 20.6 4.6665 18.4001 4.6665 14.0003Z" stroke={stock} strokeWidth="1.5"/>
  </svg>
);

export default ResizeIcon;
