import React from "react";
import PropTypes from "prop-types";
function OutputScreenRow(props) {
  return (
    <div className="screen-row">
      <input type="text" readOnly value={props.value} />
    </div>
  );
}
OutputScreenRow.propTypes = {
  value: PropTypes.string.isRequired
};
export default OutputScreenRow;
