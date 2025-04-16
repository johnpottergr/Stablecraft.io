const React = require('react');
const DocPage = require('@theme-original/DocPage');

function DocPageWrapper(props) {
  console.log('DocPage - Custom component loaded!');

  return (
    <>
      <div
        style={{
          background: 'linear-gradient(135deg, rgb(54, 167, 122) 0%, rgb(78, 225, 160) 100%)',
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
          zIndex: 10,
        }}
      >
        Knowledge Base
      </div>
      <DocPage {...props} />
    </>
  );
}

module.exports = DocPageWrapper;
