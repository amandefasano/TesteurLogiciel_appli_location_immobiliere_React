import styled from "styled-components";

export default function Card({ cover, title }) {
  return (
    <CardContainerStyled>
      <img src={cover}></img>
      <p>{title}</p>
    </CardContainerStyled>
  );
}

const CardContainerStyled = styled.div`
  img {
    width: 100%;
    height: 21.25rem; /*340px*/
    border-radius: 10px;
    object-fit: cover;
  }

  p {
    color: #ffffff;
    font-size: 1.125rem; /*18px*/
    font-weight: bold;
    position: relative;
    bottom: 4.375rem;
    left: 0;
    padding-left: 1.25rem; /*20px*/
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {
    height: 100%;

    img {
      height: 15.937rem; /*255px*/
    }

    p {
      bottom: 3.9rem;
    }
  }
`;
