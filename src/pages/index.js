import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FaPlay } from 'react-icons/fa'; // Import the FaPlay icon

export default function Home() {
  return (
    <Layout title="Stablecraft">
      <main style={{
        padding: '20px',
        maxWidth: '700px',
        margin: '40px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>

        {/* Intro Section */}
        <div style={{ width: '100%', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ flex: '1' }}>
              <h1 style={{
                fontWeight: 600,
                fontSize: '3rem',
                paddingBottom: '6px',
                marginTop: '3rem',
                marginBottom: '0rem',
                color: '#36A77A',
              }}>
                Stablecraft LLC
              </h1>

              {/* Subheading */}
              <div style={{
                fontSize: '1.25rem',
                color: '#111',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid #5ED1A5'
              }}>
                Stablecoin Payments for Real Businesses
              </div>

              <p>
                Imagine slashing your payment processing fees from
                3% to near-zero, settling cross-border payments in minutes
                instead of days, and tapping into a global customer base
                without worrying about exchange rates. That’s the power of stablecoins like USDC and BUSD. In 2022 alone, stablecoins facilitated $11 trillion in on-chain
                transactions—businesses are catching on, and you don’t want to be left behind.
              </p>

              <a
                href="mailto:johnpottergr@gmail.com"
                style={{
                  display: 'inline-block',
                  marginTop: '0.5rem',
                  marginBottom: '1.25rem',
                  padding: '10px 20px',
                  backgroundColor: '#5ED1A5',
                  color: '#1A202C',
                  fontWeight: 'bold',
                  borderRadius: '6px',
                  textDecoration: 'none',
                }}
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>

        {/* Offer Card Section */}
        <div style={{ width: '100%', maxWidth: '1100px', textAlign: 'center', padding: '0', color: '#222222' }}>

          {/* Top Header */}
          <div
            style={{
              backgroundColor: '#fff',
              padding: '15px',
              borderRadius: '12px 12px 0 0',
              border: '2px solid #5ED1A5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '80px',
              boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)'
            }}
          >
           <p style={{ margin: 0, marginTop: '0rem', color: '#111', fontStyle: 'italic' }}>
              Let’s make payments simple
            </p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', lineHeight: '1.8' }}>
              <a href="mailto:johnpottergr@gmail.com" style={{ color: '#111', textDecoration: 'underline' }}>
                johnpottergr@gmail.com
              </a><br />
              616.745.2985
            </p>
          </div>

        </div>
      </main>
    </Layout>
  );
}