import React from 'react';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', color: '#94a3b8' }}>
      <p>© {new Date().getFullYear()} Sophorn Lim | Built with React</p>
    </footer>
  );
}

export default Footer;