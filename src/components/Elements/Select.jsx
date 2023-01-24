import React, { useEffect, useState } from "react";
import { useData } from "../../context/storeData";

const Select = (props) => {
  const { setRange, sortRange, sortData, sortValue, setSortValue } =
  useData();
  const { onChange = () => {}, label } = props;
  const { options = [] } = props;
  const [text, setText] = useState("Release Date");
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };

  useEffect(() => {
    onChange(sortValue);
  }, []);

  const handleSort = () => {
    setRange(!sortRange);
    sortData(sortValue);
  };
  return (
    <>
      <p className="label">{label && label}</p>
      <div style={{ display: "flex", width: "100%" }}>
        <div className="sort" onClick={() => handleSort()}>
          {sortRange ? <p>&#8593;</p> : <p>&#8595;</p>}
        </div>
        <div className="select">
          <div className="select-value" onClick={() => handleChange()}>
            {text}
          </div>
          {show && (
            <div className="absolute">
              {options.map((option, index) => (
                <div
                  className="select-input"
                  key={index}
                  onClick={() => {
                    setSortValue(option.value);
                    setText(option.text);
                    setShow(false);
                    sortData(option.value);
                  }}
                >
                  {option.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Select;
