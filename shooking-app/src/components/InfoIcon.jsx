import { useState } from "react";

import "./InfoIcon.css";

const InfoIcon = ({ message }) => {
  const [visible, setVisible] = useState(false);

  const toggleTooltip = () => setVisible((prev) => !prev);

  return (
    <div className="InfoIcon">
      <span className="icon" onClick={toggleTooltip}>
        ⓘ
      </span>
      {visible && <div className="tooltip">{message}</div>}
    </div>
  );
};

export default InfoIcon;
