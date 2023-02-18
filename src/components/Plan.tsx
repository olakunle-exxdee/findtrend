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
          <h5 className={checked ? "text-primary" : "text-light"}>Monthly</h5>
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
          <h5 className={checked ? "text-light" : "text-primary"}>Yearly</h5>
        </div>
      </div>
      {/* justify-content-center align-items-start d-flex flex-xs-column flex-row  */}
      <div className="payment ">
        <div className="my-5">
          <div className="payment-element  rounded bg-light">
            <div className="payment-header border-bottom">
              <h3>Personal</h3>
              <p>Special first packet for all</p>
            </div>
            <div className="payment-details my-3">
              <h3 className="fs-1">
                $8 <span className="fs-6">/month</span>
              </h3>
              <div className="li-item-wrapper">
                <li className="li-item my-3 ">Up to 5 page each group</li>
                <li className="li-item my-3">Up to 10 group page</li>
                <li className="li-item my-3">5 Days group page saved</li>
              </div>

              <input
                className="btn btn-primary rounded-pill px-5"
                type="button"
                value="Start Free Trial"
              />
            </div>
          </div>
          <div className="payment-element rounded bg-primary">
            <div className="payment-header border-bottom">
              <h3>Regular</h3>
              <p>Recommended for personal pro</p>
            </div>
            <div className="payment-details my-3">
              <h3 className="fs-1">
                $20 <span className="fs-6">/month</span>
              </h3>
              <div className="li-item-wrapper">
                <li className="li-item my-3 ">Up to 5 page each group</li>
                <li className="li-item my-3">Up to 10 group page</li>
                <li className="li-item my-3">5 Days group page saved</li>
                <li className="li-item my-3">A fourth item</li>
                <li className="li-item my-3">And a fifth one</li>
              </div>

              <input
                className="btn btn-dark rounded-pill px-5"
                type="button"
                value="Start Free Trial"
              />
            </div>
          </div>
          <div className="payment-element  rounded bg-light">
            <div className="payment-header border-bottom">
              <h3>Premium</h3>
              <p>Packet for Startup & Company</p>
            </div>
            <div className="payment-details my-3">
              <h3 className="fs-1">
                $48 <span className="fs-6">/month</span>
              </h3>
              <div className="li-item-wrapper">
                <li className="li-item my-3 ">Up to 5 page each group</li>
                <li className="li-item my-3">Up to 10 group page</li>
                <li className="li-item my-3">5 Days group page saved</li>
                <li className="li-item my-3">A fourth item</li>
                <li className="li-item my-3">And a fifth one</li>
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
