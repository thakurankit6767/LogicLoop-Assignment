import { useStore } from "./store";

export const useData = () => {
  const { state, dispatch } = useStore();
  return {
    mainData: state.mainData,
    showData: state.showData,
    sortRange: state.sortRange,
    sortValue: state.sortValue,
    loadData: (data) =>
      dispatch({ type: "loadData", message: "loadData", data: data }),
    filterByName: (data) =>
      dispatch({ type: "filterByName", message: "filterByName", data: data }),
    filterByRate: (data) =>
      dispatch({ type: "filterByRate", message: "filterByRate", data: data }),
    sortData: (data) =>
      dispatch({ type: "sortData", message: "sortData", data: data }),
    setRange: (data) =>
      dispatch({ type: "setRange", message: "setRange", data: data }),
    setSortValue: (data) =>
      dispatch({ type: "setSortValue", message: "setSortValue", data: data }),
    reset: (data) => dispatch({ type: "reset", message: "Reset" }),
  };
};
