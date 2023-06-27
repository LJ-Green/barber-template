import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import Logo from './../assets/Dapper Studio Logo.png';
import Menu from './../assets/menu-icon.svg';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 640);
      setShowMenu(false); // Hide menu on resize
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className='flex h-[100px] justify-between items-center'>
      <div>
        <img className='w-[200px]' src={Logo} alt='Logo' />
      </div>
      <div>
        {isMobile && (
          <button className='md:hidden mr-8 cursor-pointer' onClick={toggleMenu}>
            <img className='w-6 h-6' src={Menu} alt='Hamburger Icon' />
          </button>
        )}
        {(showMenu || !isMobile) && (
          <ul className='md:flex mt-50'>
          <li className='mr-6'>
            <a href='#home'>Home</a>
          </li>
          <li className='mr-6'>
            <a href='#features'>Features</a>
          </li>
          <li className='mr-6'>
            <a href='#services'>Services</a>
          </li>
          <li className='mr-6'>
            <a href='#booking'>Booking</a>
          </li>
          <li className='mr-4'>
            <a href='#footer'>Contact Us</a>
          </li>
        </ul>
        )}
        {showMenu && isMobile && (
          <PopupMenu menuRef={menuRef} setShowMenu={setShowMenu} />
        )}
      </div>
    </div>
  );
};

const PopupMenu = ({ menuRef, setShowMenu }) => {
  const handleItemClick = () => {
    setShowMenu(false);
  };

  return (
    <div className='absolute bg-gray-200 p-4 mt-10 right-[10px] text-center rounded-lg' ref={menuRef}>
      <ul>
        <li className='mb-2'>
          <a href='/' onClick={handleItemClick}>
            Home
          </a>
        </li>
        <li className='mb-2'>
          <a href='/services' onClick={handleItemClick}>
            Features
          </a>
        </li>
        <li className='mb-2'>
          <a href='/gallery' onClick={handleItemClick}>
            Services
          </a>
        </li>
        <li className='mb-2'>
          <a href='/location' onClick={handleItemClick}>
            Booking
          </a>
        </li>
        <li>
          <a href='/location' onClick={handleItemClick}>
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;