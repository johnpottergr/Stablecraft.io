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

        <hr />
        <div className="centered-content">
        <h2 style={{ textAlign: 'center' }}>USDT: Fiat-Backed Stability</h2>
<p>
  <strong>Tether (USDT)</strong> is pegged 1:1 to the US dollar and remains the largest stablecoin by market capitalization, with a value exceeding <strong>$143 billion</strong>. Recent reports indicate its backing consists primarily of fiat currencies, with a significant portion held in <strong>US Treasury bills</strong>, following a shift away from commercial paper to enhance security. It prioritizes liquidity and stability, making USDT a cornerstone for global cryptocurrency transactions, with over <strong>350 million users worldwide as of 2024</strong>.
</p>

<hr />

<h2 style={{ textAlign: 'center' }}>USDC: Fiat-Backed with Regulatory Compliance</h2>
<p>
  <strong>USD Coin (USDC)</strong>, launched in <strong>September 2018</strong>, is a fiat-backed stablecoin designed for stability and trust. It maintains a 1:1 peg to the US dollar, with reserves held in <strong>cash, US Treasury bills, and other secure assets</strong>, and is audited monthly by top-tier accounting firms. USDC’s market cap, around <strong>$55.9 billion in 2025</strong>, highlights its prominence as a reliable, regulated option for global users.
</p>

<hr />

<h2 style={{ textAlign: 'center' }}>TUSD: Fiat-Backed with Transparency</h2>
<p>
  <strong>TrueUSD (TUSD)</strong>, launched in <strong>January 2018</strong>, is a fiat-backed stablecoin focused on transparency and stability. As of 2025, it maintains a 1:1 peg to the US dollar, with reserves held in <strong>traditional banks and escrow accounts</strong>, audited regularly by independent third parties. These <strong>daily attestations</strong> ensure that the circulating supply is fully backed by USD, enhancing trust. TUSD's market cap, around <strong>$3.26 billion in early 2023</strong> and likely higher in 2025, highlights its role in providing a secure and stable option for users.
</p>

<hr />

<h2 style={{ textAlign: 'center' }}>DAI: Crypto-Collateralized and Decentralized</h2>
<p>
  <strong>DAI</strong>, issued by <strong>MakerDAO</strong>, is a decentralized stablecoin operating on the Ethereum blockchain, designed to maintain a $1 peg through <strong>overcollateralization</strong>. It is backed by a basket of cryptocurrencies—primarily <strong>Ethereum (ETH)</strong>, as well as <strong>Basic Attention Token (BAT)</strong>, <strong>wrapped Bitcoin (wBTC)</strong>, and others—held in <strong>Maker Vaults</strong>. DAI is crypto-collateralized and governed by smart contracts. Its stability is maintained by requiring
</p>
<hr />
<h2 style={{ textAlign: 'center' }}>FRAX: Fiat-Backed with Transparency</h2>
<p>
<strong>Frax Finance</strong>, initially known for its fractional-algorithmic stablecoin FRAX, launched <strong>frxUSD</strong> in <strong>2025</strong>. The rebranded version is backed by <strong>BlackRock's USD Institutional Digital Liquidity Fund (BUIDL)</strong> and tokenized by <strong>Securitize</strong> (<strong>FRAX BUIDL Backing</strong>). This fund invests in **cash, U.S. Treasury bills, and repurchase agreements**, ensuring full collateralization and transparency.
</p>
</div>
      </main>
    </Layout>
  );
}
