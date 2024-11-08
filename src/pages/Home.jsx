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

  return (
    <HomeContainerStyled>
      <Banner
        opacity="0.6"
        img_src="/src/assets/banner.svg"
        tagline={"Chez vous,\npartout et ailleurs"}
      />
      <div className="locations">
        <ul>
          {locations.map((location) => {
            return (
              <CardLink key={location.id} to={`/locations/${location.id}`}>
                <li>
                  <Card cover={location.cover} title={location.title} />
                </li>
              </CardLink>
            );
          })}
        </ul>
      </div>
    </HomeContainerStyled>
  );
}

const HomeContainerStyled = styled.div`
  .locations {
    margin: 2.687rem 0 3.125rem; /*43px 0 50px*/
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3.125rem 3.75rem; /*50px 60px*/
    background-color: #f6f6f6;
    border-radius: 25px;
    list-style-type: none;
    padding: 3.125rem; /*50px*/
    margin: 0;
  }

  ul li {
    padding: 0;
    margin: 0;
    height: 21.25rem; /*340px*/
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {
    .locations {
      margin: 1.375rem 0 1.687rem; /*22px 0 27px*/
    }

    ul {
      grid-template-columns: 100%;
      row-gap: 1.25rem; /*20px*/
      background-color: unset;
      padding: unset;
      list-style-type: none;
      margin: 0;
    }

    // ul {
    //   display: flex;
    //   flex-direction: column;
    //   width: 100%;
    //   background-color: unset;
    //   padding: unset;
    //   list-style-type: none;
    //   margin: 0;
    // }

    ul li {
      height: 15.937rem; /*255px*/
    }
  }
`;

const CardLink = styled(NavLink)`
  text-decoration: none;
  margin: 0;
  padding: 0;

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {
    // margin-bottom: 1.25rem; /*20px*/
  }
`;

export default Home;
