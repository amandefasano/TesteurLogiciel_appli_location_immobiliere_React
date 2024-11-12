import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Slider from "../components/Slider";
import { getLocation } from "../data/locations";
import Accordion from "../components/Accordion";
import { Rating } from "../components/Rating";

export async function loader({ params }) {
  const location = await getLocation(params.locationId);
  return { location };
}

function Location() {
  const { location } = useLoaderData();

  const photos = location.pictures;
  const rating = location.rating;
  const name = location.host.name.split(" ");

  return (
    <LocationContainerStyled id="location">
      <Slider photos={photos} />
      <section id="info-wrapper">
        <section className="location-wrapper">
          <div>
            <h1 className="title">{location.title}</h1>
            <p className="district">{location.location}</p>
          </div>
          <ul className={location.tags.length > 4 ? "wide" : "tight"}>
            {location.tags.map((tag) => {
              return <li key={tag}>{tag}</li>;
            })}
          </ul>
        </section>
        <section className="host-wrapper">
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
          <Rating rating={rating}></Rating>
        </section>
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

const LocationContainerStyled = styled.div`
  #info-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .location-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
  }

  .title {
    margin: 0;
    padding-top: 1.875rem; /*30px*/
    color: #ff6060;
    font-size: 2.25rem; /*36px*/
    font-weight: 500;
  }

  .district {
    color: #000000;
    font-size: 1.125rem; /*18px*/
    font-weight: 500;
  }

  .host {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    margin-top: 1.5rem; /*24px*/
  }

  .hostName {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #ff6060;
    font-size: 1.125rem; /*18px*/
    font-weight: 500;
  }

  .hostPicture {
    border-radius: 100px;
    width: 4rem; /*64px*/
    height: 4rem; /*64px*/
    margin-left: 0.625rem; /*10px*/
  }

  .location-wrapper ul {
    display: flex;
    flex-direction: row;
    position: relative;
    list-style-type: none;
    margin: 1.25rem 0 1.5rem; /*20px 0 24px*/
    padding: 0;
    width: 75%;
    &.wide {
      width: 100%;
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
      padding: 0.25rem 0; /*4px*/
    }
  }

  #accordion-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.75rem; /*76px*/
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {
    #info-wrapper {
      flex-direction: column;
    }

    .title {
      font-size: 1.125rem; /*18px*/
      padding-top: 0;
      margin-top: 0.937rem; /*15px*/
    }

    .district {
      font-size: 0.875rem; /*14px*/
      margin-top: 7px;
    }

    .host-wrapper {
      margin: 1rem 0 0.812rem; /*16px 0 13px*/
    }

    .host {
      margin: 0;
    }

    .hostName {
      font-size: 0.75rem; /*12px*/
    }

    .hostPicture {
      width: 2rem; /*32px*/
      height: 2rem; /*32px*/
    }

    .location-wrapper {
      width: 100%;
    }

    .location-wrapper ul {
      flex-wrap: wrap;
      width: 100%;
      margin: 0;
    }

    .location-wrapper ul li {
      font-size: 0.625rem; /*10px*/
      width: unset;
      padding: 0.25rem 1.562rem; /*4px 25px*/
      margin-top: 0.625rem; /*10px*/
    }

    .host-wrapper {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }

    #accordion-wrapper {
      display: flex;
      flex-direction: column;
      gap: unset;
    }
  }
`;

export default Location;
