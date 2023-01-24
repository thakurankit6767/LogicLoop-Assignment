import React, { createContext, useContext, useReducer } from "react";

const StoreContext = createContext();
const initialState = {
  mainData: [],
  showData: [],
  sortRange: true,
  sortValue: "first_release_date",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loadData":
      return {
        mainData: action.data,
        showData: action.data,
        sortRange: state.sortRange,
        sortValue: state.sortValue,
        message: action.message,
      };
    case "filterByName":
      const fullData = state.showData;
      var filteredData = fullData.filter((d) => d.name.includes(action.data));
      if (action.data == "") {
        filteredData = state.mainData;
      }
      return {
        mainData: state.mainData,
        showData: filteredData,
        sortRange: state.sortRange,
        sortValue: state.sortValue,
        message: action.message,
      };

    case "filterByRate":
      const rateFullData = state.showData;
      var rateFilteredData = rateFullData.filter((d) => d.rating > action.data);
      if (action.data == "") {
        rateFilteredData = state.mainData;
      }
      return {
        mainData: state.mainData,
        showData: rateFilteredData,
        sortRange: state.sortRange,
        sortValue: state.sortValue,
        message: action.message,
      };

    case "sortData":
      var fieldData = action.data;
      var sortFullData = state.showData;
      var sortFilteredData = [];

      switch (fieldData) {
        case "name":
          function sortByProperty(property) {
            return function (a, b) {
              if (state.sortRange) {
                if (a[property] > b[property]) return 1;
                else if (a[property] < b[property]) return -1;
              } else {
                if (a[property] > b[property]) return -1;
                else if (a[property] < b[property]) return 1;
              }
              return 0;
            };
          }
          sortFilteredData = sortFullData.sort(sortByProperty("name"));
          break;
        case "first_release_date":
          state.sortRange
            ? (sortFilteredData = sortFullData
                .slice()
                .sort((a, b) => a.first_release_date - b.first_release_date))
            : (sortFilteredData = sortFullData
                .slice()
                .sort((a, b) => b.first_release_date - a.first_release_date));
          break;
        case "rating":
          state.sortRange
            ? (sortFilteredData = sortFullData
                .slice()
                .sort((a, b) => a.rating - b.rating))
            : (sortFilteredData = sortFullData
                .slice()
                .sort((a, b) => b.rating - a.rating));
          break;
      }

      return {
        mainData: state.mainData,
        showData: sortFilteredData,
        sortRange: state.sortRange,
        sortValue: state.sortValue,
        message: action.message,
      };

    case "setRange":
      return {
        mainData: state.mainData,
        showData: state.showData,
        sortRange: action.data,
        sortValue: state.sortValue,
        message: action.message,
      };

    case "setSortValue":
      return {
        mainData: state.mainData,
        showData: state.showData,
        sortRange: state.sortRange,
        sortValue: action.data,
        message: action.message,
      };
    case "reset":
      return {
        mainData: state.mainData,
        showData: state.mainData,
        sortRange: state.sortRange,
        sortValue: state.sortValue,
        message: action.message,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
