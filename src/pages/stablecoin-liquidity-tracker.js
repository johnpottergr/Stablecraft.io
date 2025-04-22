import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function StablecoinLiquidity() {
  const allDexes = ['Uniswap', 'SushiSwap', 'Curve'];
  const allStablecoins = ['DAI', 'USDC', 'USDT', 'TUSD', 'FRAX'];

  const tokenLogos = {
    USDC: 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png',
    USDT: 'https://assets.coingecko.com/coins/images/325/thumb/Tether.png',
    DAI: 'https://assets.coingecko.com/coins/images/9956/thumb/4943.png',
    TUSD: 'https://assets.coingecko.com/coins/images/3449/thumb/tusd.png',
    FRAX: 'https://assets.coingecko.com/coins/images/13422/thumb/frax_logo.png',
    WETH: 'https://assets.coingecko.com/coins/images/2518/thumb/weth.png',
  };


  const mockData = [
    { dex: 'Uniswap', pool: 'USDC/DAI', tvl: 250300000, change30d: 9.3, ilRisk: 'Moderate', apy: 5.55 },
    { dex: 'Uniswap', pool: 'USDT/USDC', tvl: 190800000, change30d: 4.8, ilRisk: 'Low', apy: 4.12 },
    { dex: 'Uniswap', pool: 'DAI/USDT', tvl: 107200000, change30d: -2.1, ilRisk: 'Moderate', apy: 5.91 },
    { dex: 'Uniswap', pool: 'WETH/USDC', tvl: 93500000, change30d: -7.5, ilRisk: 'High', apy: 22.45 },
  ];

  const [selectedDEX, setSelectedDEX] = useState('Uniswap');
  const [selectedStablecoin, setSelectedStablecoin] = useState('All');
  const [minTVL, setMinTVL] = useState(500000);

  const filteredData = mockData.filter(pool =>
    pool.dex === selectedDEX &&
    (selectedStablecoin === 'All' || pool.pool.includes(selectedStablecoin)) &&
    pool.tvl >= minTVL
  );


  const getRowColor = (risk) => {
    if (risk === 'Low') return '#F0FAF7';
    if (risk === 'Moderate') return '#FEF9E7';
    if (risk === 'High') return '#FCE8E6';
    return 'white';
  };

  return (
<Layout title="Stablecoin Liquidity Tracker">
  <main style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
  <h1 style={{ color: '#36A77A', textAlign: 'center'   }}>
  Stablecoin Liquidity Tracker
</h1>
    <p style={{ color: '#666', marginBottom: '1.5rem',
     paddingBottom: '0.5rem',          // Optional: extra breathing room
    borderBottom: '1px solid #36A77A', // Keep or adjust as needed
    textAlign: 'center'
     }}>
      Tracks stablecoin-heavy liquidity pools on major decentralized exchanges (DEXs)
    </p>

    {/* Filters */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <select value={selectedDEX} onChange={(e) => setSelectedDEX(e.target.value)}>
            {allDexes.map(dex => <option key={dex} value={dex}>{dex}</option>)}
          </select>
          <select value={selectedStablecoin} onChange={(e) => setSelectedStablecoin(e.target.value)}>
            <option value="All">All Stablecoins</option>
            {allStablecoins.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={minTVL} onChange={(e) => setMinTVL(Number(e.target.value))}>
            <option value={0}>No filter</option>
            <option value={500000}>Over $500K</option>
            <option value={1000000}>Over $1M</option>
          </select>
        </div>

{/* Two-column layout: Table + Sidebar */}
<div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
  {/* Table + Pool Depth chart column */}
  <div style={{ flex: 3 }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 0 2px #eee' }}>
      <thead style={{ backgroundColor: '#f9f9f9', textAlign: 'left' }}>
        <tr>
          <th style={{ padding: '12px' }}>Pool</th>
          <th>Pool Depth</th>
          <th>30D Change</th>
          <th>IL Risk</th>
          <th>Yield</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((pool, index) => (
          <tr key={pool.pool} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f7f7f7', borderBottom: '1px solid #eee' }}>
           <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
  {pool.pool.split('/').map(token => (
    <img
      key={token}
      src={tokenLogos[token]}
      alt={token}
      style={{ width: '20px', height: '20px', borderRadius: '50%' }}
    />
  ))}
  <span style={{ marginLeft: '8px' }}>{pool.pool}</span>
</td>

            <td>${(pool.tvl / 1e6).toFixed(1)}M</td>
            <td style={{ color: pool.change30d < 0 ? '#DB4B4B' : '#3BBE86' }}>
              {pool.change30d > 0 ? '+' : ''}{pool.change30d}%
            </td>
            <td>{pool.ilRisk}</td>
            <td>{pool.apy}%</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pool Depth chart directly under table */}
    <div style={{
      marginTop: '1.5rem',
      height: '150px',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px',
      textAlign: 'center',
      paddingTop: '60px'
    }}>
      Pool Depth (chart)
    </div>
  </div>

  {/* Right-side summary charts */}
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ height: '150px', backgroundColor: '#f4f4f4', borderRadius: '8px', textAlign: 'center', paddingTop: '60px' }}>
      Stablecoin Dominance (chart)
    </div>
    <div style={{ height: '150px', backgroundColor: '#f4f4f4', borderRadius: '8px', textAlign: 'center', paddingTop: '60px' }}>
      Yield Opportunities (chart)
    </div>
  </div>
</div>
      </main>
    </Layout>
  );
}

