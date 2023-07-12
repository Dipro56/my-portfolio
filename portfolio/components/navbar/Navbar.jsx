import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-blue-200">
      <div className="lg:text-3xl sm:text-xl font-semibold  navbar-name">
        <a href='/'>Sadat Shahriar Bari</a>
      </div>
      <div className="navbar-item">
        <ul className="navbar-item">
          <li className="list-item-common-property ">
            <a href="#about">About</a>
          </li>
          <li className="list-item-common-property">
            <a href="#education">Education</a>
          </li>
          <li className="list-item-common-property">
            <a href="#experience">Experience</a>
          </li>
          <li className="list-item-common-property">
            <a href="#skills">Skills</a>
          </li>
          <li className="list-item-common-property">
            <a href="#projects">Projects</a>
          </li>
          <li className="list-item-common-property">
            <a href="#extra-curricular">Co-curricular</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
