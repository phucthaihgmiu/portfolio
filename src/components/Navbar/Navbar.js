import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className="row">

        <div className="top-bar">
          <a className="menu-toggle" href="#"><span>Menu</span></a>

          <nav id="main-nav-wrap">
            <ul className="main-navigation">
              <li className="current"><a className="smoothscroll" href="#about" title="">Home</a></li>
              <li><a className="smoothscroll" href="#about" title="">About</a></li>
              <li><a className="smoothscroll" href="#resume" title="">Resume</a></li>
              <li><a className="smoothscroll" href="#contact" title="">Contact</a></li>
            </ul>
          </nav>
        </div> {/* /top-bar */}

      </div> {/* /row */}
    </header>
  );
};

export default Navbar;
