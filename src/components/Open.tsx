import React from 'react';
import tab5 from '../img/tab5.png';

const Open = () => {
  return (
    <section className='bg-primary p-5 text-center '>
      <h1 className='header-font text-dark display-2 py-5  '>
        Open new tabs is sh*t
      </h1>
      <div className='container '>
        <div className='row'>
          <div className='col col-sm-6 col-xl-3  open-image-wrapper px-5 py-4 bg-light rounded'>
            <img className='img-fluid' src={tab5} alt='images' />
          </div>
        </div>
      </div>
      <p className='text-heading fs-5 text text-dark my-4 py-5'>
        A solution for your browser tabs and don’t make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </p>
    </section>
  );
};

export default Open;
