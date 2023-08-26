import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Tracker = ({ theme }) => {

  return (
    <div className="tracker-page">
      <div className="container-sm pd-0">
        {/* Main Heading */}
        <div className="main-heading">
          <h3 className="title">Track your NFT history</h3>
        </div>
        {/* Main Heading End */}

        {/* Search Bar */}
        <div className="search-bar">
          <TextField
            label="Enter Serial Number"
            id="outlined-size-small"
            fullWidth
            sx={{ minHeight: 70 }}
          />
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <Button variant="outlined" size="large">Track</Button>
        </div>
        {/* Search Bar End */}

        <p>By initiating authentication, you declare that you accept or <a href="/">legal Notice</a> and <a href="/">Privacy Policy</a></p>

        <div className="mobile-view">
          <Button variant="outlined" size="large">Back Home</Button>
        </div>
      </div>
    </div>
  )
};

export default Tracker;
