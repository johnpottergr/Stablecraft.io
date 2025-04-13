import React from 'react';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import DocItem from '@theme/DocItem';
import { useDoc } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import styles from './styles.module.css'; // optional, if you want to use scoped CSS

export default function DocPageLayout({ sidebar, children }) {
  const { metadata } = useDoc();

  return (
    <Layout title={metadata.title}>
      {/* Gradient Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #36A77A 0%, #4EE1A0 100%)',
        color: 'white',
        padding: '3rem 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: 0 }}>{metadata.title}</h1>
      </div>

      <div className={clsx('container', styles.docPageContent)} style={{ display: 'flex', marginTop: '2rem' }}>
        {sidebar && (
          <div className="col col--3">
            <DocSidebar sidebar={sidebar} />
          </div>
        )}
        <main className="col col--9">
          <DocItem>{children}</DocItem>
        </main>
      </div>
    </Layout>
  );
}
