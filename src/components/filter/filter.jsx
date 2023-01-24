import React from "react";
import "./filter.css";
import Input from "../Elements/Input";
import Select from "../Elements/Select";
import { useData } from "../../context/storeData";

const options = [
  { text: "Release Date", value: "first_release_date" },
  { text: "Score", value: "rating" },
  { text: "Name", value: "name" },
];
const Filter = (props) => {
  const { filterByName, filterByRate, sortData, reset } = useData();
  return (
    <div className="panel">
      <p className="title">Filter Results</p>
      <div className="form-control">
        <Input
          label="Name (contains)"
          onChange={(text) => {
            filterByName(text);
          }}
        />
      </div>
      <div className="form-group">
        <div className="form-control">
          <Input
            label="Minimum Score"
            type="number"
            onChange={(text) => {
              filterByRate(text);
            }}
          />
        </div>
        <div className="form-control">
          <Select
            label="Order By"
            options={options}
            onChange={(value) => {
              sortData(value);
            }}
          />
        </div>
        <div className="form-control button">
          <button
            onClick={() => {
              window.location.reload();
              reset();
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
