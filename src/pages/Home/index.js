import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';

import Pagination from '@mui/material/Pagination';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Icons
import SearchIcon from 'icons/SearchIcon';
import ResizeIcon from 'icons/ResizeIcon';
import InfoIcon from 'icons/InfoIcon';
import TopIcon from 'icons/TopIcon';
import LocationIcon from 'icons/LocationIcon';
import ArrowDownIcon from 'icons/ArrowDownIcon';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Home = ({ theme }) => {

  // States
  const [age, setAge] = useState('');

  // Select Value
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="home-page">
      {/* Owner Detail Sectiom */}
      <section className="owner-detail-sec">
        <div className="container pd-0">

          {/* Row */}
          <Grid container spacing={6}>

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
                    <Button variant="outlined" startIcon={<LocationIcon />}>View Map</Button>
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
      {/* Owner Detail Sectiom End */}

      {/* History Section */}
      <section className="history-sec">
        <div className="container">

          {/* Accordion Wrap */}
          <div className="accordian-wrap">
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ArrowDownIcon className="icon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Attribute</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordian-head">
                  <div className="date-wrap">
                    <span>Date:</span>
                    <strong>Tue Jul 18 2023</strong>
                  </div>
                  <div className="owner-view">
                    <Avatar sx={{ width: 34, height: 34 }} alt="" src="/static/images/avatar/1.jpg" />
                    <strong className="title">Adam wick</strong>
                  </div>
                </div>
                <div className="accordian-body">
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3} xl={2}>
                      <div className="car-detail">
                        <span>Color</span>
                        <strong>Amber</strong>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={3} xl={2}>
                      <div className="car-detail">
                        <span>Color</span>
                        <strong>Amber</strong>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={3} xl={2}>
                      <div className="car-detail">
                        <span>Color</span>
                        <strong>Amber</strong>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={3} xl={2}>
                      <div className="car-detail">
                        <span>Color</span>
                        <strong>Amber</strong>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <Pagination count={10} variant="outlined" shape="rounded" />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ArrowDownIcon className="icon" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <Button variant="outlined">History 1</Button>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* Accordion Wrap End */}

          {/* Main Heading */}
          <div className="main-heading">
            <h3 className="title">Metadata & Ownership Activities</h3>
          </div>
          {/* Main Heading End */}

          {/* Ownership Section */}
          <div className="ownership-section">
            <div className="container">
              
              {/* Filters Wrapper */}
              <div className="filters-wrap">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Proof of Authenticity</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* Filters Wrapper End */}

              {/* Table */}
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* Table End */}

            </div>
          </div>
          {/* Ownership Section End */}

        </div>
      </section>
      {/* History Section */}

    </div>
  )
};

export default Home;
