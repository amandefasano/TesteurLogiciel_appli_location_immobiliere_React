import styled from "styled-components";

export function Rating(rating) {

  return (
    <RatingContainerStyled>
      <ul className="stars">
        {buildRating(rating.rating).map((star, index) => {
          return (
            <li className="star" key={`star-${index}`}>
              <img src={star} alt="star" />
            </li>
          );
        })}
      </ul>
    </RatingContainerStyled>
  );
}

function buildRating(rating) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push("/src/assets/pink-star.svg");
    } else {
      stars.push("/src/assets/grey-star.svg");
    }
  }

  return stars;
}

const RatingContainerStyled = styled.div`
  .stars {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    list-style-type: none;
    margin: 1.312rem 0 0.437rem; /*21px 0 7px*/
    padding: 0;
  }

  .star {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    font-size: 0.875rem; /*14px*/
    font-weight: bold;
    border-radius: 10px;
    margin-left: 1rem; /*16px*/
  }
`;
