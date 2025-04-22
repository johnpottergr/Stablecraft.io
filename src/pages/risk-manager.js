// src/pages/red-flag-monitor.js
import React from 'react';
import Layout from '@theme/Layout';

export default function RedFlagMonitor() {
  const stablecoinData = [
    {
      name: 'USDC',
      peg: '✅',
      tvl: '⚠️ -8.2%',
      audit: 'Mar 2024',
      flags: 'Recent depeg due to SVB',
    },
    {
      name: 'DAI',
      peg: '✅',
      tvl: '✅ Stable',
      audit: 'Jan 2024',
      flags: 'High exposure to ETH collateral',
    },
    {
      name: 'USDT',
      peg: '✅',
      tvl: '✅ Stable',
      audit: '❌ Unknown',
      flags: 'No public audits',
    },
    {
      name: 'TUSD',
      peg: '⚠️',
      tvl: '⚠️ -10.5%',
      audit: 'Nov 2023',
      flags: 'Liquidity risk; paused redemptions in Jan',
    },
    {
      name: 'FRAX',
      peg: '✅',
      tvl: '✅ Stable',
      audit: 'Feb 2024',
      flags: 'Partially algorithmic; recent governance changes',
    },
  ];

  return (
    <Layout title="Risk Manager">
    <main style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
    <h1 style={{ color: '#36A77A', textAlign: 'center'   }}>
    Stablecoin Risk Manager
  </h1>
      <p style={{ color: '#666', marginBottom: '1.5rem',
       paddingBottom: '0.5rem',          // Optional: extra breathing room
      borderBottom: '1px solid #36A77A', // Keep or adjust as needed
      textAlign: 'center'
       }}>
          Tracks stability issues, audit delays, and red flags across major stablecoins
          </p>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <div style={{ flex: 3 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 0 2px #eee' }}>
              <thead style={{ backgroundColor: '#f9f9f9', textAlign: 'left' }}>
                <tr>
                  <th style={{ padding: '12px' }}>Stablecoin</th>
                  <th>Peg</th>
                  <th>TVL</th>
                  <th>Last Audit</th>
                  <th>Red Flags</th>
                </tr>
              </thead>
              <tbody>
                {stablecoinData.map((coin, index) => (
                  <tr key={coin.name} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f7f7f7', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>{coin.name}</td>
                    <td>{coin.peg}</td>
                    <td>{coin.tvl}</td>
                    <td>{coin.audit}</td>
                    <td>{coin.flags}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right-hand Alert Signup */}
          <div style={{
            flex: 1,
            backgroundColor: '#fefefe',
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
          }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Get Notified About Red Flags</h4>
            <p style={{ fontSize: '0.9rem', color: '#444', marginBottom: '1rem' }}>
              Enter your email and we’ll notify you if a monitored stablecoin depegs or flags a critical issue.
            </p>
            <form>
              <input
                type="email"
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  marginBottom: '12px',
                  fontSize: '0.95rem'
                }}
              />
              <button type="submit" style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#DB4B4B',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
