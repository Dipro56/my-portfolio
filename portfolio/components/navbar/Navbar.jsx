import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-blue-200">
      <div className="text-3xl font-semibold  navbar-name">
        Sadat Shahriar Bari
      </div>
      <div className='navbar-item'>
        <ul className='navbar-item'>
          <li className='list-item-common-property '>About</li>
          <li className='list-item-common-property'>Education</li>
          <li className='list-item-common-property'>Expreience</li>
          <li className='list-item-common-property'>Skills</li>
          <li className='list-item-common-property'>Projects</li>
          <li className='list-item-common-property'>Co-curricular</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
