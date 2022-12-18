import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Info from './components/info/info';
import NavArrows from './components/navarrows';
import Navbar from './components/navbar';

function App() {
  const location = useLocation();
  const navbarRef = useRef();

  const paths = [
    '/',
    '/about%20me',
    '/resume',
    '/portfolio',
    '/contact',
  ];

  const currPageIndex = paths.indexOf(location.pathname);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener('resize', resizeHandler);

  const expandNavber = () => {
    const { current: navbar } = navbarRef;

    if (navbar.style.display === 'flex') {
      const handleTransitionend = () => {
        navbar.removeEventListener(
          'transitionend',
          handleTransitionend
        );
        navbar.style.display = 'none';
      };
      navbar.addEventListener('transitionend', handleTransitionend);
      navbar.classList.remove('nav-open');
    } else {
      navbar.style.display = 'flex';
      setTimeout(() => {
        navbar.classList.add('nav-open');
      }, 50);
    }
  };

  return (
    <div className="main-container page-fade">
      <div className="content-container">
        {windowWidth > 1020 && (
          <div className="info-wrapper">
            <Info />
          </div>
        )}
        <div className="scrollbar-padding">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </div>
      </div>
      {windowWidth > 1020 && (
        <div className="nav-wrapper">
          <Navbar />
          <div className="nav-arrows-wrapper">
            <NavArrows paths={paths} currPageIndex={currPageIndex} />
          </div>
        </div>
      )}

      {/* Rsponsive changes */}
      {windowWidth <= 1020 && (
        <>
          <div className="nav-arrows-wrapper">
            <NavArrows paths={paths} currPageIndex={currPageIndex} />
          </div>
          <button
            type="button"
            className="btn menu-btn"
            onClick={expandNavber}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="nav-wrapper-res" ref={navbarRef}>
            <Info>
              <Navbar collaps={expandNavber} />
            </Info>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
