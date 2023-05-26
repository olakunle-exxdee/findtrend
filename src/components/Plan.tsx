import React from 'react';

const Plan = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <section id='pricing' className='bg-dark p-5 animation '>
      <h1 className=' company-heading2 text-light display-4 py-5 text-center '>
        Get your best deal
      </h1>
      <div className='d-flex flex-row justify-content-center gap-4'>
        <div className='text-duration  py-2 '>
          <h5 className={!checked ? 'text-secondary' : 'text-light'}>
            Monthly
          </h5>
        </div>
        <div className='form-check form-switch '>
          <input
            className='form-check-input px-5 py-3 '
            type='checkbox'
            role='switch'
            id='flexSwitchCheckDefault'
            onChange={handleChange}
          />
        </div>
        <div className='text-duration  py-2'>
          <h5 className={checked ? 'text-secondary' : 'text-light'}>Yearly</h5>
        </div>
      </div>

      <div className='container-fluid payment'>
        <div className='row justify-content-center gap-4 my-5'>
          <div className='col col-md-6 col-xl-4 payment-element ps-5 py-4 pe-5 rounded bg-light '>
            <div className='payment-header border-bottom '>
              <h3>Personal</h3>
              <p>Special first packet for all</p>
            </div>
            <div className='payment-details'>
              <h3 className='fs-1 carousel-fade mt-2'>
                ${checked ? '8' : '79'} <span className='fs-6'>/month</span>
              </h3>
              <div className='li-item-wrapper1'>
                <li className='li-item my-4 '>Up to 5 page each group</li>
                <li className='li-item my-4'>Up to 10 group page</li>
                <li className='li-item my-4'>5 Days group page saved</li>
              </div>
              <div className=''>
                <input
                  className='btn btn-primary rounded-pill btn-lg fs-5 fw-bold  px-5 py-2 '
                  type='button'
                  value='Start Free Trial'
                />
              </div>
            </div>
          </div>
          <div className='col col-md-6 col-xl-4 payment-element ps-5 py-4 pe-5 rounded bg-primary'>
            <div className='payment-header  border-bottom '>
              <h3>Regular</h3>
              <p>Recommended for personal pro</p>
            </div>
            <div className='payment-details '>
              <h3 className='fs-1 carousel-fade mt-2'>
                ${checked ? '20' : '189'}
                <span className='fs-6'>/month</span>
              </h3>

              <div className='li-item-wrapper2'>
                <li className='li-item my-4 '>Up to 15 page each group</li>
                <li className='li-item my-4'>Download page up to 20 page</li>
                <li className='li-item my-4'>Up to 10 group page</li>
                <li className='li-item my-4'>15 Days group page saved</li>
              </div>
              <div className=''>
                <input
                  className='btn btn-dark rounded-pill btn-lg fs-5 fw-bold  px-5 py-2'
                  type='button'
                  value='Start Free Trial'
                />
              </div>
            </div>
          </div>
          <div className='col col-md-6 col-xl-4  payment-element ps-5 py-4 pe-5 rounded bg-light  '>
            <div className=''>
              <div className='payment-header border-bottom'>
                <h3>Premium</h3>
                <p>Packet for Startup & Company</p>
              </div>
              <div className='payment-details '>
                <h3 className='fs-1 carousel-fade mt-2'>
                  ${checked ? '48' : '500'} <span className='fs-6'>/month</span>
                </h3>

                <div className='li-item-wrapper3'>
                  <li className='li-item my-4 '>Unlimited group pages</li>
                  <li className='li-item my-4'>Unlimited download page</li>
                  <li className='li-item my-4'>Unlimited page each group</li>
                  <li className='li-item my-4'>Customize group pages</li>
                  <li className='li-item my-4'>Customize group page name</li>
                  <li className='li-item my-4'>30 Days group page saved</li>
                </div>
                <div className=''>
                  <input
                    className='btn btn-primary rounded-pill btn-lg fs-5 fw-bold  px-5 py-2'
                    type='button'
                    value='Start Free Trial'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
