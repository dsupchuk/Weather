import React from "react";
import "./help.css";

export const Help = () => {
  return (
    <div className="help">
      <div className="ui-form">
        <h3>Message for me</h3>
        <form>
          <div className="form-row">
            <input
              type="text"
              name="firstname"
              placeholder="Name"
              id="name"
              required
            />
            <br />
            <input
              type="text"
              name="lastname"
              placeholder="Surname"
              id="surname"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              required
            />
            <br />
            <input type="number" name="Class" placeholder="Phone Number" />
            <br />
            <input type="text" name="message" placeholder="Message for me" />
            <br />
            <div className="d-flex">
              <input
                type="checkbox"
                name="checkbox"
                value="check"
                id="agree"
                required
              />
              <p>Використання персональных данных</p>
            </div>
            <input
              type="submit"
              className="btn-sub"
              onclick={(e) => {
                e.preventDefault();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
