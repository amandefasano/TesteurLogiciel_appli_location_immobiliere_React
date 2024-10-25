import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  const url = "http://localhost:8080/api/properties";
  const [locations, setLocations] = useState([]);

  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((loc) => setLocations(loc));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Banner
        img_src={"/src/assets/banner.png"}
        p={"Chez vous, partout et ailleurs"}
      />
      <div className="locations">
        <ul>
          {locations.map((location) => {
            return (
              <li key={location.id}>
                <NavLink to={`/locations/${location.id}`}>
                  <Card cover={location.cover} title={location.title} />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
