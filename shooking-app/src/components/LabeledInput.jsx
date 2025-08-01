import PropTypes from "prop-types";

import "./LabeledInput.css";

const LabeledInput = ({ label, children, fullWidth = true }) => {
  return (
    <div className={`LabeledInput LabeledInput_${fullWidth ? "full" : "fit"}`}>
      <div className="label_section">
        <label>{label}</label>
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
