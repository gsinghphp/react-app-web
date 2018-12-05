import React from "react";

const Input = ({ label, secret, onChange, name }) => (
  <>
    <div className="p-t-31 p-b-9">
      <span className="txt1">{label}</span>
    </div>
    <div
      className="wrap-input100 validate-input"
      data-validate="Username is required"
    >
      <input
        className="input100"
        type={secret ? "password" : "text"}
        name={name}
        onChange={onChange}
      />
      <span className="focus-input100" />
    </div>
  </>
);

Input.defaultProps = {
  secret: false,
  onChange: () => {}
};

export default Input;
