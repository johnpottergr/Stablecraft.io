// src/pages/stablecoin-stress-test.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function StablecoinStressTest() {
  const initialWeights = {
    'Peg deviation': 25,
    'Volume volatility': 15,
    'Supply changes': 15,
    'Liquidity change': 20,
    'Mint/burn churn': 5,
    'Collateral quality': 15,
    'Sentiment Analysis': 5,
  };

  const [riskWeights, setRiskWeights] = useState(initialWeights);

  const total = Object.values(riskWeights).reduce((sum, val) => sum + val, 0);

  const handleSliderChange = (factor, value) => {
    const newWeights = { ...riskWeights, [factor]: Number(value) };
    const newTotal = Object.values(newWeights).reduce((sum, val) => sum + val, 0);
    if (newTotal <= 100) setRiskWeights(newWeights);
  };

  const simulatedMetrics = {
    USDT: {
      'Peg deviation': 0.01,
      'Volume volatility': 0.1,
      'Supply changes': 0.05,
      'Liquidity change': 0.03,
      'Mint/burn churn': 0.02,
      'Collateral quality': 0.1,
      'Sentiment Analysis': 0.05,
    },
    USDC: {
      'Peg deviation': 0.12,
      'Volume volatility': 0.15,
      'Supply changes': 0.1,
      'Liquidity change': 0.08,
      'Mint/burn churn': 0.03,
      'Collateral quality': 0.12,
      'Sentiment Analysis': 0.07,
    },
    DAI: {
      'Peg deviation': 0.05,
      'Volume volatility': 0.2,
      'Supply changes': 0.1,
      'Liquidity change': 0.1,
      'Mint/burn churn': 0.02,
      'Collateral quality': 0.08,
      'Sentiment Analysis': 0.1,
    },
    TUSD: {
      'Peg deviation': 0.25,
      'Volume volatility': 0.15,
      'Supply changes': 0.2,
      'Liquidity change': 0.25,
      'Mint/burn churn': 0.1,
      'Collateral quality': 0.2,
      'Sentiment Analysis': 0.2,
    },
    FRAX: {
      'Peg deviation': 0.03,
      'Volume volatility': 0.05,
      'Supply changes': 0.08,
      'Liquidity change': 0.05,
      'Mint/burn churn': 0.02,
      'Collateral quality': 0.06,
      'Sentiment Analysis': 0.03,
    },
  };

  const collateralData = {
    USDT: '60% Treasuries, 20% commercial paper',
    USDC: '100% short-term U.S. Treasuries',
    DAI: 'Multi-collateral: ETH, USDC, others',
    TUSD: 'Fully backed by U.S. dollars',
    FRAX: 'Partially algorithmic, partly collateralized'
  };

  const calculateRiskScore = (coin) => {
    const metrics = simulatedMetrics[coin];
    let total = 0;
    Object.entries(riskWeights).forEach(([factor, weight]) => {
      const metric = metrics[factor] || 0;
      total += metric * (weight / 100);
    });
    return total;
  };

  const scoreToLabel = (score) => {
    if (score < 0.1) return { label: 'Low Risk', color: '#8BD4A1' };
    if (score < 0.2) return { label: 'Moderate', color: '#6E7C88' };
    if (score < 0.3) return { label: 'High', color: '#F2B94B' };
    return { label: 'Critical', color: '#DB4B4B' };
  };

  const stablecoins = Object.keys(simulatedMetrics).map((coin) => {
    const score = calculateRiskScore(coin);
    const { label, color } = scoreToLabel(score);
    return {
      name: coin,
      price: '$1.00',
      change: '+0.0%',
      trend: '—',
      risk: label,
      riskColor: color,
      last: '—',
      recovery: '—',
      score: (score * 100).toFixed(1),
      collateral: collateralData[coin]
    };
  });
  const events = [
    {
      name: 'USDC',
      date: 'Mar 11, 2023',
      drawdown: '-12%',
      recovery: '56 hrs',
      cause: 'Triggered by collapse of Silicon Valley Bank',
      link: 'https://www.coindesk.com/policy/2023/03/11/usdc-falls-to-87-cents-as-circle-discloses-33b-svb-exposure/'
    },
    {
      name: 'DAI',
      date: 'May 12, 2022',
      drawdown: '-6%',
      recovery: '6 hrs',
      cause: 'ETH volatility + cascading liquidations',
      link: 'https://www.theblock.co/post/148913/dai-stablecoin-drops-peg'
    },
    {
      name: 'TUSD',
      date: 'Jun 28, 2021',
      drawdown: '-1.2%',
      recovery: '17 hrs',
      cause: 'Low liquidity during withdrawal spike',
      link: 'https://cryptobriefing.com/trusttoken-says-tusd-depeg-was-due-to-liquidity-issue/'
    },
    {
      name: 'FRAX',
      date: 'Dec 12, 2020',
      drawdown: '-3%',
      recovery: '9 hrs',
      cause: 'Algorithmic supply shift post-launch',
      link: 'https://blog.frax.finance/frax-v1-deployment-and-early-lessons-3ba8893a4a6e'
    }
  ];

  return (
    <Layout title="Stablecraft Stress Test">
      <main style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#36A77A'}}>Stablecoin Stress Test Assessment</h1>
          <p style={{ color: '#666', marginBottom: '1.5rem',
           paddingBottom: '0.5rem',          // Optional: extra breathing room
           borderBottom: '1px solid #36A77A' // Keep or adjust as needed
            }}>
            Dynamic risk levels based on real-time (simulated) metrics and weighting.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {stablecoins.map((coin) => (
            <div key={coin.name} style={{ width: '180px', padding: '16px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 0 0 2px #e5e7eb' }}>
              <h3 style={{ margin: '0 0 6px 0', fontSize: '1.25rem', color: '#222' }}>{coin.name}</h3>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{coin.price}</div>
              <div style={{ fontSize: '0.9rem', marginBottom: '4px', color: '#666' }}>{coin.change} <span>{coin.trend}</span></div>
              <div style={{ backgroundColor: coin.riskColor, color: '#111', fontWeight: 'bold', borderRadius: '6px', padding: '4px 8px', display: 'inline-block', marginBottom: '12px' }}>{coin.risk} ({coin.score})</div>
              <div style={{ fontSize: '0.85rem', color: '#555' }}>Last depegging<br /><strong>{coin.last}</strong></div>
              <div style={{ fontSize: '0.85rem', color: '#555' }}>Recovery<br /><strong>{coin.recovery}</strong></div>
              <div style={{ fontSize: '0.85rem', color: '#555', marginTop: '6px' }}>Collateral:<br /><strong>{coin.collateral}</strong></div>
            </div>
          ))}
        </div>

        {/* Risk Factor Sliders */}
        <div style={{ marginTop: '3rem', width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: '#222', fontSize: '1.4rem', marginBottom: '0.25rem' }}>Risk Factor Weights</h2>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>
            Adjust how much weight each risk factor should carry. Total must stay ≤ 100%.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '650px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            {Object.entries(riskWeights).map(([label, value]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ flex: '0 0 160px', textAlign: 'left', fontSize: '1rem', color: '#333' }}>{label}</div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={value}
                  onChange={(e) => handleSliderChange(label, e.target.value)}
                  style={{ flex: '1' }}
                />
                <div style={{ flex: '0 0 50px', textAlign: 'right', fontSize: '0.95rem' }}>{value}%</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: total > 100 ? '#DB4B4B' : '#3BBE86', fontWeight: 'bold' }}>
            Total: {total}%
          </div>
</div>

{/* Timeline Section */}
<div style={{ marginTop: '2rem' }}>
  <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Depeg History Timeline</h3>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px'
  }}>
    {events.map((event) => (
      <a
        key={event.name}
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#111',
          width: '250px',
          backgroundColor: '#fff',
          border: '2px solid #5ED1A5',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 0 0 1px #eee',
          transition: 'all 0.25s ease-in-out',
          cursor: 'pointer',
          transform: 'translateY(0)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.backgroundColor = '#f7fdfb';  // slight background shift
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 1px #eee';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.backgroundColor = '#fff';
        }}
      >
        <strong style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>{event.name}</strong> — {event.date}
        <div style={{ fontSize: '0.9rem', marginTop: '8px' }}>
          Drawdown: <strong>{event.drawdown}</strong><br />
          Recovery: <strong>{event.recovery}</strong><br />
          <em>{event.cause}</em>
        </div>
        <div style={{ marginTop: '8px', fontSize: '0.85rem', color: '#5ED1A5', textDecoration: 'underline' }}>
  Read more →
</div>
      </a>
    ))}
  </div>
</div>


      </main>
    </Layout>
  );
}
