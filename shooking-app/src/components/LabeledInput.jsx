import PropTypes from "prop-types";

import "./LabeledInput.css";

const LabeledInput = ({ label, children, labelSuffix }) => {
  return (
    <div className="LabeledInput">
      <div className="label_section">
        <label>{label}</label>
        {labelSuffix && <span>{labelSuffix}</span>}
      </div>
      <div className={`input_section`}>{children}</div>
    </div>
  );
};

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
};

export default LabeledInput;
