import React, { useEffect, useCallback } from 'react';
import Layout from '@theme-original/Layout';
import { useLocation } from '@docusaurus/router';
import { useWindowSize } from '@docusaurus/theme-common';

function LayoutWrapper(props) {
  const location = useLocation();
  const isKB = location.pathname.startsWith('/kb');
  const windowSize = useWindowSize();

  const updateBodyClass = useCallback(() => {
    const body = document.body;
    if (body) {
      console.log('Current Path:', location.pathname);
      console.log('isKB:', isKB);
      if (isKB) {
        body.classList.add('kb-page');
        console.log('Added kb-page class to body');
      } else {
        body.classList.remove('kb-page');
        console.log('Removed kb-page class from body');
      }
    } else {
      console.warn('Document body not found, skipping class update');
    }
  }, [isKB, location.pathname]);

  useEffect(() => {
    const timer = setTimeout(updateBodyClass, 0);
    return () => clearTimeout(timer);
  }, [updateBodyClass]);

  // Debug viewport and navbar rendering
  useEffect(() => {
    console.log('Window Size (from useWindowSize):', windowSize);
    console.log('Viewport Width (window.innerWidth):', window.innerWidth);
    const navbarToggle = document.querySelector('.navbar__toggle');
    if (navbarToggle) {
      console.log('Hamburger menu element found:', navbarToggle);
      console.log('Hamburger menu computed display:', window.getComputedStyle(navbarToggle).display);
    } else {
      console.log('Hamburger menu element not found in DOM');
    }
  }, [windowSize]);

  const showBanner = isKB && windowSize === 'desktop';
  const navbarHeight = '3.75rem'; // Navbar height (60px)

  return (
    <>
      {showBanner && (
        <div
          style={{
            background: 'white',
            color: '#36A77A',
            textAlign: 'center',
            height: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid #36A77A', // Keep or adjust as needed
            fontSize: '2.10rem',
    
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 250,
            marginTop: navbarHeight,
          }}
        >
          Knowledge Base
        </div>
      )}
      <Layout {...props} />
    </>
  );
}

export default LayoutWrapper;
