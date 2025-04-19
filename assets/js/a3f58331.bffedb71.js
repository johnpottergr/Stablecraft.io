"use strict";(self.webpackChunkstablecraft_io=self.webpackChunkstablecraft_io||[]).push([[2979],{7193:(e,i,t)=>{t.r(i),t.d(i,{default:()=>n});var s=t(6540),l=t(4958),o=t(4848);function n(){const e={USDC:"https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png",USDT:"https://assets.coingecko.com/coins/images/325/thumb/Tether.png",DAI:"https://assets.coingecko.com/coins/images/9956/thumb/4943.png",TUSD:"https://assets.coingecko.com/coins/images/3449/thumb/tusd.png",FRAX:"https://assets.coingecko.com/coins/images/13422/thumb/frax_logo.png",WETH:"https://assets.coingecko.com/coins/images/2518/thumb/weth.png"},[i,t]=(0,s.useState)("Uniswap"),[n,a]=(0,s.useState)("All"),[d,r]=(0,s.useState)(5e5),c=[{dex:"Uniswap",pool:"USDC/DAI",tvl:2503e5,change30d:9.3,ilRisk:"Moderate",apy:5.55},{dex:"Uniswap",pool:"USDT/USDC",tvl:1908e5,change30d:4.8,ilRisk:"Low",apy:4.12},{dex:"Uniswap",pool:"DAI/USDT",tvl:1072e5,change30d:-2.1,ilRisk:"Moderate",apy:5.91},{dex:"Uniswap",pool:"WETH/USDC",tvl:935e5,change30d:-7.5,ilRisk:"High",apy:22.45}].filter((e=>e.dex===i&&("All"===n||e.pool.includes(n))&&e.tvl>=d));return(0,o.jsx)(l.A,{title:"Stablecoin Liquidity Tracker",children:(0,o.jsxs)("main",{style:{padding:"80px 20px",maxWidth:"1200px",margin:"0 auto"},children:[(0,o.jsx)("h2",{style:{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"0.25rem",color:"#36A77A"},children:"Stablecoin Liquidity Tracker"}),(0,o.jsx)("p",{style:{color:"#666",marginBottom:"1.5rem"},children:"Tracks stablecoin-heavy liquidity pools on major decentralized exchanges (DEXs)"}),(0,o.jsxs)("div",{style:{display:"flex",gap:"12px",marginTop:"1rem",marginBottom:"1.5rem"},children:[(0,o.jsx)("select",{value:i,onChange:e=>t(e.target.value),children:["Uniswap","SushiSwap","Curve"].map((e=>(0,o.jsx)("option",{value:e,children:e},e)))}),(0,o.jsxs)("select",{value:n,onChange:e=>a(e.target.value),children:[(0,o.jsx)("option",{value:"All",children:"All Stablecoins"}),["DAI","USDC","USDT","TUSD","FRAX"].map((e=>(0,o.jsx)("option",{value:e,children:e},e)))]}),(0,o.jsxs)("select",{value:d,onChange:e=>r(Number(e.target.value)),children:[(0,o.jsx)("option",{value:0,children:"No filter"}),(0,o.jsx)("option",{value:5e5,children:"Over $500K"}),(0,o.jsx)("option",{value:1e6,children:"Over $1M"})]})]}),(0,o.jsxs)("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start"},children:[(0,o.jsxs)("div",{style:{flex:3},children:[(0,o.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",borderRadius:"8px",overflow:"hidden",boxShadow:"0 0 0 2px #eee"},children:[(0,o.jsx)("thead",{style:{backgroundColor:"#f9f9f9",textAlign:"left"},children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:{padding:"12px"},children:"Pool"}),(0,o.jsx)("th",{children:"Pool Depth"}),(0,o.jsx)("th",{children:"30D Change"}),(0,o.jsx)("th",{children:"IL Risk"}),(0,o.jsx)("th",{children:"Yield"})]})}),(0,o.jsx)("tbody",{children:c.map(((i,t)=>(0,o.jsxs)("tr",{style:{backgroundColor:t%2==0?"#fff":"#f7f7f7",borderBottom:"1px solid #eee"},children:[(0,o.jsxs)("td",{style:{padding:"12px",display:"flex",alignItems:"center",gap:"8px"},children:[i.pool.split("/").map((i=>(0,o.jsx)("img",{src:e[i],alt:i,style:{width:"20px",height:"20px",borderRadius:"50%"}},i))),(0,o.jsx)("span",{style:{marginLeft:"8px"},children:i.pool})]}),(0,o.jsxs)("td",{children:["$",(i.tvl/1e6).toFixed(1),"M"]}),(0,o.jsxs)("td",{style:{color:i.change30d<0?"#DB4B4B":"#3BBE86"},children:[i.change30d>0?"+":"",i.change30d,"%"]}),(0,o.jsx)("td",{children:i.ilRisk}),(0,o.jsxs)("td",{children:[i.apy,"%"]})]},i.pool)))})]}),(0,o.jsx)("div",{style:{marginTop:"1.5rem",height:"150px",backgroundColor:"#f4f4f4",borderRadius:"8px",textAlign:"center",paddingTop:"60px"},children:"Pool Depth (chart)"})]}),(0,o.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"16px"},children:[(0,o.jsx)("div",{style:{height:"150px",backgroundColor:"#f4f4f4",borderRadius:"8px",textAlign:"center",paddingTop:"60px"},children:"Stablecoin Dominance (chart)"}),(0,o.jsx)("div",{style:{height:"150px",backgroundColor:"#f4f4f4",borderRadius:"8px",textAlign:"center",paddingTop:"60px"},children:"Yield Opportunities (chart)"})]})]})]})})}}}]);