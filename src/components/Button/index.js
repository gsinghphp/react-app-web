import React from "react";

const Button = ({text, onClick}) => (
  <div className="container-login100-form-btn m-t-17">
    <button type="button" className="login100-form-btn" onClick={onClick}>{text}</button>
  </div>
);

Button.defaultProps = {
    onClick: () => {}
}

export default Button;
