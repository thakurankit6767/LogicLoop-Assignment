import React from "react";

const TextArea = (props) => {
  const { label, value, handleChange = () => {} } = props;
  return (
    <div className="textarea-box">
      <p className="label">{label && label}</p>
      <textarea className="textarea" value={value} onChange={handleChange} />
    </div>
  );
};

export default TextArea;
