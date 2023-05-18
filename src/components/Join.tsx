import React from 'react';

const Join = () => {
  return (
    <section className='bg-primary p-5 '>
      <div className='hero-heading text-center p-5 '>
        <h1 className='header-font text-dark display-2 display-md-1 mt-5 '>
          Join us on email for
        </h1>
        <h1 className='header-font  display-2 join-trending mb-5 '>
          more trending topics
        </h1>

        <input
          className='btn btn-dark  rounded-pill btn-lg fs-5 fw-bold  px-5 py-3'
          type='button'
          value='Join Now 🔥'
        />
      </div>
    </section>
  );
};

export default Join;
