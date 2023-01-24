import React, { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");
  const { label, type = "text", onChange = () => {} } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="input-box">
      <p className="label">{label && label}</p>
      <input value={value} type={type} onChange={handleChange} />
    </div>
  );
};

export default Input;
