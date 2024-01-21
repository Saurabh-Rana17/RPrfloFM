import React from "react";

const ToggleButton = ({ setOpen }) => {
  return <button onClick={() => setOpen((prev) => !prev)}>TB</button>;
};

export default ToggleButton;
