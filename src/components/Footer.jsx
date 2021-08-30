import React from 'react';

const Footer = () => {
	return (
		<div>
			        <footer className="page-footer purple accent-3">

          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/UsernameMy1/ulbi-blog">Repo</a>
            </div>
          </div>
        </footer>
		</div>
	);
};

export default Footer;