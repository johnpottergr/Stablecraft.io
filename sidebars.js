// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};
module.exports = {
  kbSidebar: [
    {
      type: 'category',
      label: 'Introduction to Stablecoins',
      collapsed: false,
      items: [
        'intro/what-is-a-stablecoin',
        'intro/stablecoins-vs-fiat',
        'intro/types-of-stablecoins',
        'intro/hello-stable-world',
      ],
    },
    {
      type: 'category',
      label: 'Quick Start Guide',
      items: [
        'quick-guide/getting-started',
        'quick-guide/wallet-setup',
        'quick-guide/accepting-payments',
        'quick-guide/fees-gas-costs',
        'quick-guide/safety-tips',
        'quick-guide/regulations-101',
      ],
    },
{
  type: 'category',
  label: 'Protocols & Networks',
  items: [
    'protocols-and-networks/well-known-stablecoins',
    'protocols-and-networks/l1-vs-l2-networks',
    'protocols-and-networks/chains-with-stablecoins',
    'protocols-and-networks/comparing-network-fees',
  ],
},
{
  type: 'category',
  label: 'Business Implementation',
  items: [
    'business-implementation/taking-payments-online',
    'business-implementation/connecting-to-your-POS',
    'business-implementation/cashing-out-to-fiat',
    'business-implementation/handling-business-funds',
    'business-implementation/stablecoin-accounting',
  ],
},
{
  type: 'category',
  label: 'Wallets and Custody',
  items: [
    'wallets-and-custody/hot-vs-cold-wallets',
    'wallets-and-custody/wallets-for-teams',
    'wallets-and-custody/custody-options',
    'wallets-and-custody/popular-wallet-brands',
  ],
},
{
  type: 'category',
  label: 'Stablecoin Mechanics',
  items: [
    'stablecoin-mechanics/how-minting-works',
    'stablecoin-mechanics/dai-and-collateral',
    'stablecoin-mechanics/algorithmic-pegs',
    'stablecoin-mechanics/smart-contract-risks',
    'stablecoin-mechanics/peg-adjustment-logic',
  ],
},
{
type: 'category',
label: 'Code Examples',
items: [
  'code-examples/web3js-send-USDC',
  'code-examples/hedera-payment-demo',
  'code-examples/metamask-integration',
  'code-examples/sample-api-requests',
],
},
    // add more categories as needed
  ],
};

