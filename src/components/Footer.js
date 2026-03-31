import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Praveen Babu</span>
      <span>Built with React · Deployed on Vercel</span>
    </footer>
  );
}

export default Footer;