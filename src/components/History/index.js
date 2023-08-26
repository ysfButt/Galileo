import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';

import Pagination from '@mui/material/Pagination';

// Icons
import ArrowDownIcon from 'icons/ArrowDownIcon';

const History = (props) => {

  return (
    <section className="history-sec">
      <div className="container pd-0">

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
                  <span>Created:</span>
                  <div>
                    <Avatar sx={{ width: 32, height: 32 }} alt="" src="/assets/images/avatar-1.png" />
                    <strong className="title">Adam wick</strong>
                  </div>
                </div>
              </div>
              <div className="accordian-body">
                <Grid container rowSpacing={{ xs: 1, sm: 1, md: 2 }} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                  <Grid item xs={4} md={3} xl={2}>
                    <div className="car-detail">
                      <span>Color</span>
                      <strong>Amber</strong>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={3} xl={2}>
                    <div className="car-detail active">
                      <span>Color</span>
                      <strong>Amber</strong>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={3} xl={2}>
                    <div className="car-detail">
                      <span>Color</span>
                      <strong>Amber</strong>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={3} xl={2}>
                    <div className="car-detail">
                      <span>Color</span>
                      <strong>Amber</strong>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={3} xl={2}>
                    <div className="car-detail">
                      <span>Color</span>
                      <strong>Amber</strong>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={3} xl={2}>
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
              <div className="accordian-head">
                <div className="date-wrap">
                  <span>Date:</span>
                  <strong>Tue Jul 18 2023</strong>
                </div>
                <div className="owner-view">
                  <span>Created:</span>
                  <div>
                    <Avatar sx={{ width: 32, height: 32 }} alt="" src="/assets/images/avatar-1.png" />
                    <strong className="title">Adam wick</strong>
                  </div>
                </div>
              </div>
              <div className="accordian-body">
                <Grid container spacing={2}>
                  <Grid item xs={4} md={3} xl={2}>
                    <div className="car-detail">
                      <span>Color</span>
                      <strong>Amber</strong>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={3} xl={2}>
                    <div className="car-detail active">
                      <span>Color</span>
                      <strong>Amber</strong>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={3} xl={2}>
                    <div className="car-detail">
                      <span>Color</span>
                      <strong>Amber</strong>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={3} xl={2}>
                    <div className="car-detail">
                      <span>Color</span>
                      <strong>Amber</strong>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={3} xl={2}>
                    <div className="car-detail">
                      <span>Color</span>
                      <strong>Amber</strong>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={3} xl={2}>
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
        </div>
        {/* Accordion Wrap End */}

      </div>
    </section>
  )
};

History.propTypes = {};

export default History;
