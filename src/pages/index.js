import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { FaPlay } from 'react-icons/fa'; // Import the FaPlay icon


export default function Home() {
 return (
   <Layout title="John Potter">
     <main style={{ padding: '20px', display: 'flex', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>

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
  color: '#F5F5F5',
}}>STABLECRAFT</h1>
 {/* Subheading added here */}
 <div style={{
        fontSize: '1.25rem',
        color: '#DDDDDD',
        fontStyle: 'italic',              // Makes it italic
        marginBottom: '1.5rem',           // Adds space between subtitle and border
        paddingBottom: '0.5rem',          // Optional: extra breathing room
        borderBottom: '1px solid #C0C0C0' // Keep or adjust as needed
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
    backgroundColor: '#dddddd',
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
<div style={{ flex: '0 0 30%', textAlign: 'center', padding: '0', borderRadius: '8px', color: '#222222' }}>


         <div
           style={{
             backgroundColor: '#111111', // Light cream background
             padding: '25px',
             borderRadius: '12px 12px 0 0',
             border: '1px solid #f9f7f2',
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center',
             alignItems: 'center',
             minHeight: '120px',
             boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)'
           }}
         >
<h2 style={{ margin: '0', color: '#ffffff' }}>Why Stablecoins?</h2>
  <div style={{ lineHeight: '1.2', marginTop: '0px', color: '#000' }}>

           </div>
         </div>


         {/* Bottom Half with Original White Background */}
         <div style={{ backgroundColor: '#f9f7f2', border: '1px solid #f9f7f2',padding: '20px', borderRadius: '0 0 8px 8px' }}>
           {/* Connect Section */}
           <div style={{ marginTop: '0px', fontSize: '1.1rem',
lineHeight: '1.5',
opacity: 0.9


           }}>
<p style={{
  lineHeight: '1.6',
  maxWidth: '90%',
  margin: '0 auto',
}}>
  Stablecraft can help businesses like yours adopt stablecoin payments without the headaches.
</p>
<p style={{
  lineHeight: '1.6',
  maxWidth: '90%',
  margin: '1rem auto',
}}>
  From wallet setup to payment gateway integration, we’ll get you up and running fast.
</p>


           </div>
           {/* Recommendation Video Link */}
           <div style={{ marginTop: '20px',   marginLeft: '20px', justifyContent: 'left' }}>
           <p><strong>✅ Save Big on Fees</strong></p>
<p><strong>🌐 Go Global, Instantly</strong></p>
<p><strong>🤝 Build Customer Trust</strong></p>
<p><strong>🛡 Stay Compliant, Stress-Free</strong></p>



           </div>
                   {/* Connect Section */}
                   <div style={{ marginTop: '50px' }}>
              <h5 style={{ margin: '0px 0 5px' }}>The Smartest Payment Decision You'll Ever Make
            </h5>
            <h5 style={{ margin: '0px 0 5px' }}>
            </h5>
            <h5 style={{ margin: '0px 0 5px' }}>

            </h5>
             <h6 style={{ margin: '20px 0 5px' }}>
               <a href="mailto:john@stablecraftconsulting.com" style={{ color: '#222222', textDecoration: 'none' }}>john@stablecraft.io</a>
             </h6>
             <h6 style={{ margin: '5px 0 5px' }}>
               <a href="tel:+16167452985" style={{ color: '#222222', textDecoration: 'none' }}>616.745.2985</a>
             </h6>
           </div>
         </div>
       </div>

             </main>
   </Layout>
 );
}
