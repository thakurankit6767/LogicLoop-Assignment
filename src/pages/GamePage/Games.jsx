import React, { useEffect, useState } from "react";
import "./Games.css";
import Filter from "../../components/filter/filter";
import Item from "../../components/Items/Items";
import { getList } from "../../Api/Api";
import { useData } from "../../context/storeData";

const Games = () => {
  const [loading, setLoading] = useState(true);
  const { showData, loadData, sortData } = useData();

  useEffect(() => {
    setTimeout(() => {
      firstLoad();
    }, 2000);
  }, []);

  const firstLoad = async () => {
    const DataList = await getList();
    if (DataList.code == 200) {
      if (DataList.data != []) {
        loadData(DataList.data);
        sortData("first_release_date");
        setLoading(false);
      }
    } else {
      setLoading(true);
    }
  };

  return (
    <div className="main-video-div">
      <div className="filter-div">
        <Filter />
      </div>
      <div className="content-div">
        {!loading && showData ? (
          showData.map((item, index) => (
            <Item
              key={index}
              name={item.name}
              first_release_date={new Date(item.first_release_date)}
              id={item.id}
              summary={item.summary}
              rating={item.rating}
            />
          ))
        ) : (
          <div className="loading-wrap">
            <img className="loading" src="spinner.gif" />
            <span className="loading-text">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
