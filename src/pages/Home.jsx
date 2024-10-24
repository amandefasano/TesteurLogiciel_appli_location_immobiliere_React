import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <Header />
      <div id="about">
        <Outlet />
      </div>

      <Banner
        img_src={"/src/assets/banner.png"}
        p={"Chez vous, partout et ailleurs"}
      />
      <div className="locations">
        <ul>
          {locations.map((location) => {
            return (
              <li key={location.id}>
                <Card cover={location.cover} title={location.title} />
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Home;
