import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import styled from "styled-components";

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

  const LocationsDiv = styled.div`
    margin: 2.687rem 0 3.125rem; /*43px 0 50px*/
  `;

  const LocationsGrid = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 21.25rem; /*340px*/
    gap: 3.125rem 3.75rem; /*50px 60px*/
    background-color: #f6f6f6;
    border-radius: 25px;
    list-style-type: none;
    padding: 3.125rem; /*50px*/
    margin: 0;
  `;

  const CardLink = styled(NavLink)`
    text-decoration: none;
    margin: 0;
    padding: 0;
  `;

  const StyledLi = styled.li`
    padding: 0;
    margin: 0;
    height: 21.25rem; /*340px*/
    // height: 17.937rem; /*287px*/
  `;

  return (
    <>
      <Banner
        opacity="0.6"
        img_src={"/src/assets/banner.svg"}
        tagline={"Chez vous, partout et ailleurs"}
      />
      <LocationsDiv>
        <LocationsGrid>
          {locations.map((location) => {
            return (
              <CardLink key={location.id} to={`/locations/${location.id}`}>
                <StyledLi>
                  <Card cover={location.cover} title={location.title} />
                </StyledLi>
              </CardLink>
            );
          })}
        </LocationsGrid>
      </LocationsDiv>
    </>
  );
}

export default Home;
