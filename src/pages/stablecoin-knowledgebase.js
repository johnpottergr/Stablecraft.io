import Layout from '@theme/Layout';
import React, { useState } from 'react';

export default function Stablecoinknowledgebase() {
  const [openSection, setOpenSection] = useState('intro');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <Layout title="Stablecoin Knowledgebase">
      {/* Hero banner */}
      <div style={{
        background: 'linear-gradient(135deg, #36A77A 0%, #4EE1A0 100%)',
        color: 'white',
        padding: '5rem 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Stablecoin Knowledge Base</h1>
      </div>

      {/* Main content wrapper */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem',
      }}>

        {/* Sidebar */}
<div style={{
  width: '350px',
  marginRight: '2rem',
  background: '#F7F7F7', // neutral gray tone
  padding: '1rem',
  borderRadius: '8px',
}}>
  <div>
    <h3 onClick={() => toggleSection('intro')} style={{ cursor: 'pointer' }}>
      Introduction to Stablecoins {openSection === 'intro' ? '▾' : '▸'}
    </h3>
    {openSection === 'intro' && (
      <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '0.5rem' }}>
        <li>
          <a href="/kb/what-is-a-stablecoin" style={{
            textDecoration: 'none',
            color: '#111',
            display: 'block',
            padding: '0.4rem 0'
          }}>
            What is a stablecoin?
          </a>
        </li>
        <li>
          <a href="/kb/stablecoins-vs-fiat" style={{
            textDecoration: 'none',
            color: '#111',
            display: 'block',
            padding: '0.4rem 0'
          }}>
            Stablecoins vs fiat
          </a>
        </li>
        <li>
          <a href="/kb/types-of-stablecoins" style={{
            textDecoration: 'none',
            color: '#111',
            display: 'block',
            padding: '0.4rem 0'
          }}>
            Types of stablecoins
          </a>
        </li>
        <li>
          <a href="/kb/hello-stable-world" style={{
            textDecoration: 'none',
            color: '#111',
            display: 'block',
            padding: '0.4rem 0',
            fontWeight: 'bold'
          }}>
            Hello stable world
          </a>
        </li>
      </ul>
    )}
  </div>
</div>







      </div>
    </Layout>
  );
}

