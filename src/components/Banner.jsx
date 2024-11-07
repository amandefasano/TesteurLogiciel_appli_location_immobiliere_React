import styled from "styled-components";

export default function Banner({ opacity, img_src, tagline }) {
  const banner = document.querySelector(".banner");

  if (banner) {
    if(opacity) {
      banner.style = `background-color: rgba(0, 0, 0, ${opacity})`
    }
  }

  return (
    <>
      <BannerContainerStyled>
        <div className="banner">
          <img src={img_src} alt="wild picture" />
        </div>
        {tagline ? <p>{tagline}</p> : ""}
      </BannerContainerStyled>
    </>
  );
}

const BannerContainerStyled = styled.div`
  position: relative;
  max-width: 77.5rem; /*1240px*/
  height: 13.937rem; /*223px*/

  .banner {
    position: relative;
    width: 100%;
    height: 13.937rem; /*223px*/
    background-color: rgba(0,0,0,0.3);
    border-radius: 25px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 100%;
    height: 13.937rem; /*223px*/
    border-radius: 25px;
    object-fit: cover;
    mix-blend-mode: darken;
  }

  p {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #ffffff;
    font-size: 3rem; /*48px*/
    font-weight: bold;
    margin: 0;
    border-radius: 25px;
    -webkit-text-stroke: 1px black;
    paint-order: stroke;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
