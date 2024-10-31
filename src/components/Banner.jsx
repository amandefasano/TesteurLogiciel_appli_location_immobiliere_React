import styled from "styled-components";

export default function Banner({ img_src, p }) {
  const Image = styled.img`
    width: 100%;
    height: 13.937rem; /*223px*/
    border-radius: 1.562rem; /*25px*/
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    object-fit: cover;
  `;

  const WrapP = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    opacity: 0.6;
    width: 77.5rem; /*1240px*/
    // width: 67.562rem; /*1081px*/
    height: 13.937rem; /*223px*/
    border-radius: 1.562rem; /*25px*/
    position: absolute;
    left: 6.312rem; /*101px*/
    top: 10.25rem; /*164px*/
  `;

  const StyledP = styled.p`
    color: #ffffff;
    opacity: 100%;
    font-size: 3rem; /*48px*/
    font-weight: bold;
  `;

  return (
    <>
      <Image src={img_src}></Image>
      <WrapP>
        <StyledP className={p ? "banner-text" : "display-none"}>{p}</StyledP>
      </WrapP>
    </>
  );
}
