import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainerStyled>
      <img src="/src/assets/LOGO-white.svg"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainerStyled>
  );
}

const FooterContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  background-color: #000000;
  width: 100%;
  position: absolute;
  left: 0;

  img {
    margin-top: 4.125rem; /*66px*/
  }

  p {
    margin: 1.812rem 0; /*29px 0*/
    font-size: 1.5rem; /*24px*/
    font-weight: 500;
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {

  p {
    margin: 0;
    font-size: 0.75rem; /*12px*/
    height: 
  }
  }
`;
