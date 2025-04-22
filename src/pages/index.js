import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FaPlay } from 'react-icons/fa'; // Import the FaPlay icon


export default function Home() {
 return (
   <Layout title="Stablecraft">
     <main style={{ padding: '20px', display: 'flex', gap: '40px', maxWidth: '1200px', margin: '40px auto' }}>

  {/* Right Column moved first (was second) */}
  <div style={{ flex: '1', textAlign: 'left' }}>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
           <div style={{ flex: '1' }}>
           <h1 style={{
    fontWeight: 600,  // or 400 for regular
    fontSize: '3rem', // optional: slightly reduce size too

  paddingBottom: '6px',
  marginTop: '3rem',
  marginBottom: '0rem',
  color: '#36A77A',
}}>Stablecraft LLC</h1>
 {/* Subheading added here */}
 <div style={{
        fontSize: '1.25rem',
        color: '#111',
        fontStyle: 'italic',              // Makes it italic
        marginBottom: '1.5rem',           // Adds space between subtitle and border
        paddingBottom: '0.5rem',          // Optional: extra breathing room
        borderBottom: '2px solid #5ED1A5' // Keep or adjust as needed
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
{/* Left Column moved second (was first) */}
<div style={{ flex: '0 0 30%', textAlign: 'center', padding: '0', color: '#222222' }}>

  {/* Top Black Header */}
  <div
    style={{
      backgroundColor: '#fff',
      padding: '25px',
      borderRadius: '12px 12px 0 0',
      border: '2px solid #5ED1A5',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '120px',
      boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)'
    }}
  >
    <h2 style={{ margin: '0', color: '#111' }}>What We Offer</h2>
  </div>

  {/* White Middle Content */}
  <div
    style={{
      backgroundColor: '#fff',
      borderLeft: '2px solid #5ED1A5',
      borderRight: '2px solid #5ED1A5',
      borderBottom: '2px solid #5ED1A5',
      padding: '20px',
      color: '#111',
    }}
  >
    <div style={{ marginTop: '0px', fontSize: '1.1rem', lineHeight: '1.5', opacity: 0.9 }}>
      <p style={{
        lineHeight: '1.6',
        maxWidth: '90%',
        margin: '0 auto'
      }}>
        Stablecraft helps you accept stablecoin payments—without the technical stress. We’ll handle wallet setup, gateway integration, and compliance.
      </p>
    </div>

    {/* Bullet List */}
    <div style={{ marginTop: '30px', marginBottom: '15px',paddingLeft: '30px', textAlign: 'left' }}>
      <div style={{ marginBottom: '0.6rem' }}><strong>✅ Cut fees to near zero</strong></div>
      <div style={{ marginBottom: '0.6rem' }}><strong>🌐 Go global in minutes</strong></div>
      <div style={{ marginBottom: '0.6rem' }}><strong>🤝 Earn customer trust</strong></div>
      <div><strong>🛡 Stay stress-free and compliant</strong></div>
    </div>
  </div>

  {/* Full-width Black Footer */}
  <div
    style={{
      backgroundColor: '#fff',
      color: '#111',
      textAlign: 'center',
      padding: '1rem',
      borderRadius: '0 0 12px 12px',
      border: '2px solid #5ED1A5',
      borderTop: 'none' // removes double border where black meets white
    }}
  >
    <p style={{ margin: 0, marginTop: '0rem', color:'#111', fontStyle: 'italic' }}>
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
