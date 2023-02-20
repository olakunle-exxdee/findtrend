import React from "react";

const Plan = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    console.log(checked);

    setChecked(!checked);
  };
  return (
    <section className="bg-dark p-5 ">
      <h1 className=" company-heading2 text-light display-4 py-5 text-center ">
        Get your best deal
      </h1>
      <div className="d-flex flex-row justify-content-center gap-4">
        <div className="text-duration  py-2 ">
          <h5 className={!checked ? "text-secondary" : "text-light"}>
            Monthly
          </h5>
        </div>
        <div className="form-check form-switch ">
          <input
            className="form-check-input px-5 py-3 "
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={handleChange}
          />
        </div>
        <div className="text-duration  py-2">
          <h5 className={checked ? "text-secondary" : "text-light"}>Yearly</h5>
        </div>
      </div>

      <div className="container-fluid payment">
        <div className="row justify-content-center gap-4 my-5">
          <div className="col col-md-6 col-xl-4 payment-element ps-5 py-4  rounded bg-light ">
            <div className="payment-header border-bottom ">
              <h3>Personal</h3>
              <p>Special first packet for all</p>
            </div>
            <div className="payment-details">
              <h3 className="fs-1 carousel-fade">
                ${checked ? "8" : "79"} <span className="fs-6">/month</span>
              </h3>
              <div className="li-item-wrapper1">
                <li className="li-item my-4 ">Up to 5 page each group</li>
                <li className="li-item my-4">Up to 10 group page</li>
                <li className="li-item my-4">5 Days group page saved</li>
              </div>

              <input
                className="btn btn-primary rounded-pill px-5 mt-auto"
                type="button"
                value="Start Free Trial"
              />
            </div>
          </div>
          <div className="col col-md-6 col-xl-4 payment-element ps-5 py-4  rounded bg-primary">
            <div className="payment-header  border-bottom ">
              <h3>Regular</h3>
              <p>Recommended for personal pro</p>
            </div>
            <div className="payment-details ">
              <h3 className="fs-1 carousel-fade">
                ${checked ? "20" : "189"}
                <span className="fs-6">/month</span>
              </h3>

              <div className="li-item-wrapper2">
                <li className="li-item my-4 ">Up to 15 page each group</li>
                <li className="li-item my-4">Download page up to 20 page</li>
                <li className="li-item my-4">Up to 10 group page</li>
                <li className="li-item my-4">15 Days group page saved</li>
              </div>
              <input
                className="btn btn-dark rounded-pill px-5"
                type="button"
                value="Start Free Trial"
              />
            </div>
          </div>
          <div className="col col-md-6 col-xl-4 payment-element ps-5 py-4  rounded bg-light">
            <div className="payment-header border-bottom">
              <h3>Premium</h3>
              <p>Packet for Startup & Company</p>
            </div>
            <div className="payment-details ">
              <h3 className="fs-1 carousel-fade">
                ${checked ? "48" : "500"} <span className="fs-6">/month</span>
              </h3>

              <div className="li-item-wrapper3">
                <li className="li-item my-4 ">Unlimited group pages</li>
                <li className="li-item my-4">Unlimited download page</li>
                <li className="li-item my-4">Unlimited page each group</li>
                <li className="li-item my-4">Customize sorting group pages</li>
                <li className="li-item my-4">Customize group page name</li>
                <li className="li-item my-4">30 Days group page saved</li>
              </div>
              <input
                className="btn btn-primary rounded-pill px-5"
                type="button"
                value="Start Free Trial"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
