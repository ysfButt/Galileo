import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Tracker = ({ theme }) => {

  return (
    <div className="tracker-page">
      <div className="container-sm">
        {/* Main Heading */}
        <div className="main-heading">
          <h3 className="title">Track your NFT history</h3>
        </div>
        {/* Main Heading End */}

        {/* Search Bar */}
        <div className="search-bar">
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <Button variant="outlined">Outlined</Button>
        </div>
        {/* Search Bar End */}

        <p>By initiating authentication, you declare that you accept or <a href="/">legal Notice</a> and <a href="/">Privacy Policy</a></p>
      </div>
    </div>
  )
};

export default Tracker;
