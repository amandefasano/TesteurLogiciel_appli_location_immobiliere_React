import { useLoaderData } from "react-router-dom";
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

  return (
    <div id="location">
      <Slider photos={photos} />
      <div className="title">
        <h1>{location.title}</h1>
        <p>{location.location}</p>
      </div>
      <div className="host">
        <p>{location.host.name}</p>
        <img src={location.host.picture} alt="Host profile picture" />
      </div>
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
      <Accordion id="description" header="Description" details={location.description} />
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
