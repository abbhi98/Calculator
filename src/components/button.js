import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <input type="button" value={props.label} onClick={props.handleClick} />
  );
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default Button;
