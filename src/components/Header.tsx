import logo from '../img/logo.svg';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark p-3 '>
      <a href='#home' className='navbar-brand'>
        <img src={logo} alt='logo' />
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
          <li className='nav-item pe-auto  my-3 my-lg-0 mx-lg-3 ms-lg-auto fs-5 '>
            <a href='#about' className='nav-link fw-bold text-light'>
              About
            </a>
          </li>
          <li className='nav-item pe-auto  my-3 my-lg-0 mx-lg-3 fs-5'>
            <a href='#how' className='nav-link text-light'>
              How it work
            </a>
          </li>
          <li className='nav-item pe-auto  my-3 my-lg-0 mx-lg-3 fs-5'>
            <a href='#pricing' className='nav-link text-light'>
              Pricing
            </a>
          </li>
          <li className='nav-item pe-auto  my-3 my-lg-0 mx-lg-3 fs-5'>
            <a href='#solution' className='nav-link text-light '>
              Solution
            </a>
          </li>
          <li className='nav-item pe-auto  my-3 my-lg-0 mx-lg-3 fs-5'>
            <a href='#contact' className='nav-link text-light'>
              Features
            </a>
          </li>
          <li className='nav-item pe-auto  my-3 my-lg-0 ms-lg-auto '>
            <input
              className='btn btn-dark rounded-pill px-5'
              type='button'
              value='Login'
            />
          </li>
          <li className='nav-item pe-auto  my-3 my-lg-0 '>
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
