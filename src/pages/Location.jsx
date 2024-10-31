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

  const Intro = styled.section`
    display: flex;
    justify-content: space-between;
  `;

  const Title = styled.h1`
    margin: 0;
    padding-top: 1.875rem; /*30px*/
    color: #ff6060;
    font-size: 2.25rem; /*36px*/
    font-weight: 500;
  `;

  const District = styled.p`
    margin: 0 0 1.25rem 0; /*0 0 20px 0*/
    color: #000000;
    font-size: 1.125rem; /*18px*/
    font-weight: 500;
  `;

  const Host = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const HostName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #ff6060;
    font-size: 1.125rem; /*18px*/
    font-weight: 500;
    margin-right: 0.625rem; /*10px*/
  `;

  const HostPicture = styled.img`
    border-radius: 100px;
    width: 4rem; /*64px*/
    height: 4rem; /*64px*/
  `

  return (
    <div id="location">
      <Slider photos={photos} />
      <Intro>
        <div>
          <Title>{location.title}</Title>
          <District>{location.location}</District>
        </div>
        <Host>
          <HostName>
            {name.map((part) => {
              return <p key={part}>{part}</p>;
            })}
          </HostName>
          <HostPicture src={location.host.picture} alt="Host profile picture" />
        </Host>
      </Intro>
      <div className="tags">
        <ul>
          {location.tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
      </div>
      <div className="rating">
        <ul>
          {stars.map((star) => {
            return (
              <li key={Math.floor(Math.random() * 66)}>
                <img src={star} alt="star" />
              </li>
            );
          })}
        </ul>
      </div>
      <Accordion
        id="description"
        header="Description"
        details={location.description}
      />
      <Accordion
        id="equipment"
        header="Équipements"
        details={
          <ul>
            {location.equipments.map((equipment) => {
              return <li key={equipment}>{equipment}</li>;
            })}
          </ul>
        }
      />
    </div>
  );
}

function buildRating(rating) {
  let stars = [];

  switch (rating) {
    case "1":
      stars = [
        "/src/assets/pink-star.svg",
        "/src/assets/grey-star.svg",
        "/src/assets/grey-star.svg",
        "/src/assets/grey-star.svg",
        "/src/assets/grey-star.svg",
      ];
      break;
    case "2":
      stars = [
        "/src/assets/pink-star.svg",
        "/src/assets/pink-star.svg",
        "/src/assets/grey-star.svg",
        "/src/assets/grey-star.svg",
        "/src/assets/grey-star.svg",
      ];
      break;
    case "3":
      stars = [
        "/src/assets/pink-star.svg",
        "/src/assets/pink-star.svg",
        "/src/assets/pink-star.svg",
        "/src/assets/grey-star.svg",
        "/src/assets/grey-star.svg",
      ];
      break;
    case "4":
      stars = [
        "/src/assets/pink-star.svg",
        "/src/assets/pink-star.svg",
        "/src/assets/pink-star.svg",
        "/src/assets/pink-star.svg",
        "/src/assets/grey-star.svg",
      ];
      break;
    case "5":
      stars = [
        "/src/assets/pink-star.svg",
        "/src/assets/pink-star.svg",
        "/src/assets/pink-star.svg",
        "/src/assets/pink-star.svg",
        "/src/assets/pink-star.svg",
      ];
      break;
    default:
      stars = [
        "/src/assets/grey-star.svg",
        "/src/assets/grey-star.svg",
        "/src/assets/grey-star.svg",
        "/src/assets/grey-star.svg",
        "/src/assets/grey-star.svg",
      ];
  }

  return stars;
}

export default Location;
