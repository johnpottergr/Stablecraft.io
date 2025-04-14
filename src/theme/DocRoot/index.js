import React from 'react';
import { useLocation } from '@docusaurus/router';

export default function DocRoot({ children }) {
  const location = useLocation();
  const isKB = location.pathname.startsWith('/kb');

  return (
    <>
      {isKB && (
        <div
          style={{
            background: 'linear-gradient(135deg, #36A77A 0%, #4EE1A0 100%)',
            color: 'white',
            textAlign: 'center',
            height: '15rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.25rem',
            fontWeight: 'bold',
            position: 'sticky',
            top: 0,
            zIndex: 10, // Lowered to ensure sidebar dropdowns appear above
          }}
        >
          Knowledge Base
        </div>
      )}
      <div style={{ paddingTop: isKB ? '15rem' : 0 }}>{children}</div>
    </>
  );
}
