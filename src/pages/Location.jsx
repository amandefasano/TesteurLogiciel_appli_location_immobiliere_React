import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Slider from "../components/Slider";
import { getLocation } from "../data/locations";
import Accordion from "../components/Accordion";

export async function loader({ params }) {
  const location = await getLocation(params.locationId);
  return { location };
}

function Location() {
  const { location } = useLoaderData();

  const photos = location.pictures;
  const rating = location.rating;
  const stars = buildRating(rating);
  const name = location.host.name.split(" ");

  return (
    <LocationContainerStyled id="location">
      <Slider photos={photos} />
      <section className="wrapper">
        <div>
          <h1 className="title">{location.title}</h1>
          <p className="district">{location.location}</p>
        </div>
        <div className="host">
          <div className="hostName">
            {name.map((part) => {
              return <p key={part}>{part}</p>;
            })}
          </div>
          <img
            className="hostPicture"
            src={location.host.picture}
            alt="Host profile picture"
          />
        </div>
      </section>
      <section className="wrapper">
        <ul className={location.tags.length > 4 ? "wide" : "tight"}>
          {location.tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
        <ul className="stars">
          {stars.map((star) => {
            return (
              <li className="star" key={`star-${stars.indexOf(star)}`}>
                <img src={star} alt="star" />
              </li>
            );
          })}
        </ul>
      </section>
      <section id="accordion-wrapper" className="wrapper">
        <Accordion
          id="description"
          header="Description"
          details={location.description}
        />
        <Accordion
          id="equipment"
          header="Équipements"
          details={location.equipments}
        />
      </section>
    </LocationContainerStyled>
  );
}

function buildRating(rating) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if(i <= rating) {
      stars.push("/src/assets/pink-star.svg");
    } else {
      stars.push("/src/assets/grey-star.svg");
    }
  }

  return stars;
}

const LocationContainerStyled = styled.div`
  .wrapper {
    display: flex;
    justify-content: space-between;
    &#accordion-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4.75rem; /*76px*/
      margin: 1.5rem 0 3.125rem; /*24px 0 50px*/
    }
  }

  .title {
    margin: 0;
    padding-top: 1.875rem; /*30px*/
    color: #ff6060;
    font-size: 2.25rem; /*36px*/
    font-weight: 500;
  }

  .district {
    margin: 0 0 1.25rem 0; /*0 0 20px 0*/
    color: #000000;
    font-size: 1.125rem; /*18px*/
    font-weight: 500;
  }

  .host {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .hostName {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #ff6060;
    font-size: 1.125rem; /*18px*/
    font-weight: 500;
    margin-right: 0.625rem; /*10px*/
  }

  .hostPicture {
    border-radius: 100px;
    width: 4rem; /*64px*/
    height: 4rem; /*64px*/
  }

  ul {
    display: flex;
    flex-direction: row;
    position: relative;
    list-style-type: none;
    margin: 1.25rem 0 0; /*20px*/
    padding: 0;
    width: 40%;
    &.wide {
      width: 55%;
    }
    &.stars {
      width: 30%;
      justify-content: flex-end;
      margin-bottom: 0.437rem; /*7px*/
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    background-color: #ff6060;
    color: #ffffff;
    font-size: 0.875rem; /*14px*/
    font-weight: bold;
    border-radius: 10px;
    margin-right: 0.625rem; /*10px*/
    &.star {
      background-color: transparent;
      margin-right: 0;
      width: 10%;
    }
  }
`;

export default Location;
