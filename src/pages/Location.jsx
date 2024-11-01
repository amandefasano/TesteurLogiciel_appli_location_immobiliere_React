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

  const Wrapper = styled.section`
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
  `;

  const StyledList = styled.ul`
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
    }
  `;

  const StyledLi = styled.li`
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
  `;

  return (
    <div id="location">
      <Slider photos={photos} />
      <Wrapper>
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
      </Wrapper>
      <Wrapper>
        <StyledList className={location.tags.length > 4 ? "wide" : "tight"}>
          {location.tags.map((tag) => {
            return <StyledLi key={tag}>{tag}</StyledLi>;
          })}
        </StyledList>
        <StyledList className="stars">
          {stars.map((star) => {
            return (
              <StyledLi className="star" key={Math.floor(Math.random() * 66)}>
                <img src={star} alt="star" />
              </StyledLi>
            );
          })}
        </StyledList>
      </Wrapper>
      <Wrapper>
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
      </Wrapper>
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
