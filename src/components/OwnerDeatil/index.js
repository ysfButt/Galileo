import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// Icons
import ResizeIcon from 'icons/ResizeIcon';
import InfoIcon from 'icons/InfoIcon';
import TopIcon from 'icons/TopIcon';
import LocationIcon from 'icons/LocationIcon';
import ArrowDownIcon from 'icons/ArrowDownIcon';

const OwnerDeatil = (props) => {

  // States
  const [age, setAge] = useState('');

  // Select Value
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className="owner-detail-sec">
      <div className="container pd-0">

        {/* Row */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>

          {/* Columns */}
          <Grid item xs={12} md={6}>
            <div className="img-detail">
              <div className="resize-icon">
                <ResizeIcon />
              </div>
              <figure className="img mr-0">
                <img src="assets/images/car.png" alt="" />
              </figure>
              <div className="info-icon">
                <InfoIcon />
              </div>
            </div>
          </Grid>
          {/* Columns End */}

          {/* Columns */}
          <Grid item xs={12} md={6}>
            <div className="product-detail-widget">
              <div className="widget-head">
                <Avatar sx={{ width: 54, height: 54 }} alt="" src="assets/images/avatar.png" />
                <div className="head-caption">
                  <strong className="title">Jacob & Co</strong>
                  <span className="subtitle">Creator</span>
                </div>
              </div>
              <div className="widget-body">
                <h3 className="title">Luxury Stainless Watch</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis facilisis tortor, ut molestie. In rhoncus aliquam dui, vitae sollicitudin justo, cursus maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis facilisis tortor, ut molestie. In rhoncus aliquam dui, vitae sollicitudin justo, cursus maecenas.  In rhoncus aliquam dui, vitae sollicitudin justo, cursus maecenas.</p>
              </div>
              <div className="widget-footer">
                <div className="current-owner">
                  <div className="caption">
                    <span className="text">Current Owner</span>
                    <div className="owner-view">
                      <Avatar sx={{ width: 34, height: 34 }} alt="" src="/assets/images/avatar-1.png" />
                      <strong className="title">
                        <span>Adam wick</span>
                        <TopIcon />
                      </strong>
                    </div>
                  </div>
                  <Button variant="outlined" startIcon={<LocationIcon width='17' height='20' />}>View Map</Button>
                </div>
                <FormControl fullWidth sx={{ minHeight: 70, backgroundColor: '#F4F4F4' }}>
                  <InputLabel id="demo-simple-select-label">Proof of Authenticity</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    IconComponent={() => <ArrowDownIcon className="icon" />}
                    sx={{ minHeight: 70 }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </Grid>
          {/* Columns */}

        </Grid>
        {/* Row End */}

      </div>
    </section>
  )
};

OwnerDeatil.propTypes = {};

export default OwnerDeatil;
