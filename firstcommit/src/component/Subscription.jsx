import React from "react";
import cover from "../cover.png";
import "./Subscription.css";

function Subscription() {
  return (
    <div className="flex-container">
      <div>
        <img src={cover} alt="background_image"></img>
      </div>
      <div>
        <h1>
          <b>Business news delivered weekly</b>
        </h1>
        <p>
          stay uptodate with latest articles and business updates. You will even
          get special recommendations weekly
        </p>
        <h1>
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
              style={{
                borderBottomLeftRadius: "100rem",
                borderTopLeftRadius: "100rem",
              }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  borderBottomRightRadius: "100rem",
                  borderTopRightRadius: "100rem",
                }}
              >
                Suscribe
              </button>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Subscription;
