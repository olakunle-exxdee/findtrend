import React from 'react';
import logo1 from '../img/bh.png';
import logo2 from '../img/fb.png';
import logo3 from '../img/ln.png';
import logo4 from '../img/md.png';
import logo5 from '../img/pi.png';
import logo6 from '../img/rd.png';
import logo7 from '../img/tw.png';
import logo8 from '../img/wk.png';
import tweet1 from '../img/tweet1.png';
import tweet2 from '../img/tweet 2.png';
import tweet3 from '../img/tweet 3.png';
const Platform = () => {
  return (
    <section id='solution' className='bg-info p-5 animation'>
      <h1 className=' company-heading2 text-dark display-4 py-5 text-center '>
        All platform connect to Findtrend
      </h1>
      <div className='container'>
        <div className='row gap-2 '>
          <div className=' platform-img col col-lg-4 col-xl-1 rounded'>
            <img
              className='img-fluid mx-auto d-block'
              src={logo1}
              alt='images'
            />
          </div>
          <div className=' platform-img col col-lg-4 col-xl-1 rounded'>
            <img
              className='img-fluid mx-auto d-block'
              src={logo2}
              alt='images'
            />
          </div>
          <div className=' platform-img col col-lg-4 col-xl-1 rounded'>
            <img
              className='img-fluid mx-auto d-block'
              src={logo3}
              alt='images'
            />
          </div>
          <div className=' platform-img col col-lg-4 col-xl-1 rounded'>
            <img
              className='img-fluid mx-auto d-block'
              src={logo4}
              alt='images'
            />
          </div>
          <div className=' platform-img col col-lg-4 col-xl-1 rounded'>
            <img
              className='img-fluid mx-auto d-block'
              src={logo5}
              alt='images'
            />
          </div>
          <div className=' platform-img col col-lg-4 col-xl-1 rounded'>
            <img
              className='img-fluid mx-auto d-block'
              src={logo6}
              alt='images'
            />
          </div>
          <div className=' platform-img col col-lg-4 col-xl-1 rounded'>
            <img
              className='img-fluid mx-auto d-block'
              src={logo7}
              alt='images'
            />
          </div>
          <div className=' platform-img col col-lg-4 col-xl-1 rounded'>
            <img
              className='img-fluid mx-auto d-block'
              src={logo8}
              alt='images'
            />
          </div>
        </div>
      </div>
      <div className='tweet'>
        <img
          className='img-fluid mx-auto d-block my-5'
          src={tweet1}
          alt='images'
        />
        <img className='img-fluid mx-auto d-block' src={tweet2} alt='images' />
        <img
          className='img-fluid mx-auto d-block my-5'
          src={tweet3}
          alt='images'
        />
      </div>
      <div className='text-center'>
        <input
          className='btn btn-dark rounded-pill px-4 py-3 '
          type='button'
          value='View More Trend'
        />
      </div>
    </section>
  );
};

export default Platform;
