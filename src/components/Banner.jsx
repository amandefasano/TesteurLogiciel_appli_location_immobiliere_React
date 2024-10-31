import styled from "styled-components";

export default function Banner({ img_src, p }) {
  const Wrapper = styled.div`
    position: relative;
    max-width: 77.5rem; /*1240px*/
    height: 13.937rem; /*223px*/
  `;

  const Image = styled.img`
    width: 100%;
    height: 13.937rem; /*223px*/
    border-radius: 25px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    object-fit: cover;
  `;

  const StyledP = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    opacity: 0.6;
    width: 100%;
    height: 100%;
    color: #ffffff;
    font-size: 3rem; /*48px*/
    font-weight: bold;
    margin: 0;
    border-radius: 25px;
  `;

  return (
    <>
      <Wrapper id="banner">
        <Image src={img_src}></Image>
        <StyledP className={p ? "banner-text" : "display-none"}>{p}</StyledP>
      </Wrapper>
    </>
  );
}
