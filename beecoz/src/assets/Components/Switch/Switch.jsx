import React, { useState } from "react";
import "./Switch.modules.css"

function Switch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <div className="switch-handle"></div>
    </div>
  );
}

export default Switch;
