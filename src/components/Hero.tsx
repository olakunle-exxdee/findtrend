import React from 'react';
import tab1 from '../img/tab1.png';
import tab2 from '../img/tab2.png';
import tab3 from '../img/tab3.png';
import tab4 from '../img/tab4.png';
export default function Hero() {
  return (
    <section className='height py-5 text-center'>
      <div className='hero-heading '>
        <h1 className='header-font text-light display-2 display-md-1 '>
          Minimize your tabs.
        </h1>
        <h1 className='header-font text-light display-2 '>Find the trends!</h1>
        <p className='text-heading fs-5 text text-secondary my-4'>
          Don’t let your computer memories consumes all of those browser tabs.
          Findtrend let you gathers all of your favorite website into one place.
        </p>

        <input
          className='btn btn-primary rounded-pill btn-lg fs-4 fw-bold  px-5 py-3'
          type='button'
          value='Get Started 🔥'
        />
      </div>
      <div className=' container text-center hero-images  my-5 '>
        <div className='row'>
          <div className='col-xl-3 hero-image-wrapper'>
            <img className='img-fluid' src={tab4} alt='images' />
          </div>
          <div className='col-xl-3  hero-image-wrapper'>
            <img className='img-fluid' src={tab3} alt='images' />
          </div>
          <div className='col-xl-3 hero-image-wrapper'>
            <img className='img-fluid' src={tab2} alt='images' />
          </div>
          <div className='col-xl-3  hero-image-wrapper'>
            <img className='img-fluid' src={tab1} alt='images' />
          </div>
        </div>
      </div>
    </section>
  );
}

//  <div className="hero-images my-5">
//    <img className="img-fluid" src={tab1} alt="images" />

//    <img className="img-fluid" src={tab2} alt="images" />

//    <img className="img-fluid" src={tab3} alt="images" />

//    <img className="img-fluid" src={tab4} alt="images" />
//  </div>;
