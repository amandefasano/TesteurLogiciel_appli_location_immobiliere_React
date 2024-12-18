import styled from "styled-components";

export default function Banner({ opacity, img_src, tagline }) {
  return (
    <>
      <BannerContainerStyled>
        <img
          className={tagline ? "shadow-banner-img" : "banner-img"}
          src={img_src}
          alt="wild picture"
        />
        <p style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
          {tagline}
        </p>
      </BannerContainerStyled>
    </>
  );
}

const BannerContainerStyled = styled.div`
  position: relative;
  max-width: 77.5rem; /*1240px*/

  img {
    width: 100%;
    height: 13.937rem; /*223px*/
    border-radius: 25px;
    object-fit: cover;
    &.shadow-banner-img {
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  p {
    position: absolute;
    top: 0; /*-0.125rem;*/ /*-2px*/
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 98%;
    color: #ffffff;
    font-size: 3rem; /*48px*/
    font-weight: bold;
    -webkit-text-stroke: 1px black;
    paint-order: stroke;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0;
    border-radius: 25px;
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {
    img {
      max-width: 20.937rem; /*335px*/
      height: 6.937rem; /*111px*/
      &.shadow-banner-img {
        box-shadow: unset;
      }
    }

    p {
      font-size: 1.5rem; /*24px*/
      width: 95%;
      height: 6.937rem; /*111px*/
      padding-left: 1rem; /*16px*/
      white-space: pre-wrap;
      justify-content: unset;
    }
  }
`;
