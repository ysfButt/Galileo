import React, { useEffect } from 'react';

// Icons
import SearchIcon from 'icons/SearchIcon';
import CountryIcon from 'icons/CountryIcon';

const MainHeader = () => {

  // useEffect(() => {
  //   window.onscroll = () => {
  //     let mainHeader = document.getElementsByClassName("main-header");
  //     mainHeader = mainHeader[0] ? mainHeader[0] : null;
  //     if (!mainHeader) return;

  //     if (window.pageYOffset > 50) mainHeader.className.add("fixed");
  //     else mainHeader.className.remove("fixed");
  //   }
  // });

  const menuLink = [
    {
      path: '/',
      text: 'Home',
      active: false
    },
    {
      path: '/',
      text: 'Circle World',
      active: false
    },
    {
      path: '/',
      text: 'Digital Journey',
      active: false
    },
    {
      path: '/',
      text: 'Electic Future',
      active: false
    },
    {
      path: '/',
      text: 'Freude',
      active: false
    },
    {
      path: '/',
      text: 'Models',
      active: false
    },
    {
      path: '/',
      text: 'Tracker Tool',
      active: true
    }
  ];

  return (
    <header className="main-header">
      <div className="container-sm pd-0 pd-0">
        <div className="main-header-inner">
          {/* Logo */}
          <h1 className="logo">
            <a href="/">
              <img src='assets/images/logo.png' alt="Logo" />
            </a>
          </h1>
          {/* Logo End */}
          {/* Main Menu Wrap */}
          <div className="main-menu-wrap">
            <div className="main-menu-links">
              <ul className="main-menu">
                {menuLink.map((item, i) => (
                  <li key={i}>
                    <a href={item.path} className={item.active === true ? 'active' : ''}>{item.text}</a>
                  </li>
                ))}
              </ul>
              <div className="main-menu-actions">
                <div className="search-bar">
                  <SearchIcon />
                </div>
                <div className="country-wrap">
                  <CountryIcon />
                  <span className="text">BMW in your country</span>
                </div>
              </div>
            </div>
            <div className="driving-wrap">Sheer Driving <strong>Pleasure</strong></div>
          </div>
          {/* Main Menu Wrap End */}
        </div>
      </div>
    </header>
  );
}

MainHeader.propTypes = {};

export default MainHeader;
