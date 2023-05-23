import React from 'react';

const Header = () => {
  return (
    <nav className='animation navbar navbar-expand-lg bg-dark navbar-dark p-3 '>
      <a href='' className='navbar-brand'>
        <svg
          width='41'
          height='40'
          viewBox='0 0 41 40'
          fill='none'
          className='me-2'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M20.6836 40C31.7293 40 40.6836 31.0457 40.6836 20C40.6836 8.95431 31.7293 0 20.6836 0C9.63788 0 0.683594 8.95431 0.683594 20C0.683594 31.0457 9.63788 40 20.6836 40ZM26.9229 9.31684C27.2266 8.23805 26.1797 7.60013 25.2236 8.2813L11.8767 17.7896C10.8398 18.5283 11.0029 20 12.1217 20H15.6363V19.9728H22.4861L16.9048 21.9421L14.4443 30.6832C14.1406 31.762 15.1874 32.3999 16.1436 31.7187L29.4905 22.2105C30.5274 21.4718 30.3642 20 29.2455 20H23.9157L26.9229 9.31684Z'
            fill='#A8FF35'
          />
        </svg>
        Findtrend
      </a>

      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navmenu'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navmenu'>
        <ul className='navbar-nav ms-lg-auto text-center w-100 '>
          <li className='nav-item my-3 my-lg-0 mx-lg-3 ms-lg-auto fs-5 '>
            <a href='#products' className='nav-link fw-bold text-light'>
              About
            </a>
          </li>
          <li className='nav-item my-3 my-lg-0 mx-lg-3 fs-5'>
            <a href='#products' className='nav-link text-light'>
              How it work
            </a>
          </li>
          <li className='nav-item my-3 my-lg-0 mx-lg-3 fs-5'>
            <a href='#products' className='nav-link text-light'>
              Pricing
            </a>
          </li>
          <li className='nav-item my-3 my-lg-0 mx-lg-3 fs-5'>
            <a href='#services' className='nav-link text-light '>
              Solution
            </a>
          </li>
          <li className='nav-item my-3 my-lg-0 mx-lg-3 fs-5'>
            <a href='#contact' className='nav-link text-light'>
              Features
            </a>
          </li>
          <li className='nav-item my-3 my-lg-0 ms-lg-auto '>
            <input
              className='btn btn-dark rounded-pill px-5'
              type='button'
              value='Login'
            />
          </li>
          <li className='nav-item my-3 my-lg-0 '>
            <input
              className='btn btn-light rounded-pill px-5'
              type='button'
              value='Register'
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
