import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

// Icons
import SearchIcon from 'icons/SearchIcon';

const Home = ({ theme }) => {

  return (
    <div className="home-page">
      {/* Owner Detail Sectiom */}
      <section className="owner-detail-sec">
        <div className="container">

          {/* Row */}
          <div className="row">

            {/* Columns */}
            <div className="col-12 col-md-6">
              <div className="img-detail">
                <div className="resize-icon">
                  <SearchIcon />
                </div>
                <figure className="img">
                  <img src="assets/image/car-img.png" alt="" />
                </figure>
                <div className="info-icon">
                  <SearchIcon />
                </div>
              </div>
            </div>
            {/* Columns End */}

            {/* Columns */}
            <div className="col-12 col-md-6">
              <div className="product-detail-widget">
                <div className="widget-head">
                  <Avatar sx={{ width: 54, height: 54 }} alt="" src="/static/images/avatar/1.jpg" />
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
                        <Avatar sx={{ width: 34, height: 34 }} alt="" src="/static/images/avatar/1.jpg" />
                        <strong className="title">
                          <span>Adam wick</span>
                          <SearchIcon />
                        </strong>
                      </div>
                    </div>
                    <Button variant="outlined" startIcon={<SearchIcon />}>View Mao</Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Columns End */}

          </div>
          {/* Row End */}

        </div>
      </section>
      {/* Owner Detail Sectiom End */}
    </div>
  )
};

export default Home;
