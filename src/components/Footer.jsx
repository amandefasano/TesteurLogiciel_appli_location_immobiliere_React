import styled from "styled-components";

export default function Footer() {
  const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    background-color: #000000;
    width: 100%;
    position: absolute;
    left: 0;
  `;

  const StyledP = styled.p`
    margin: 1.812rem 0; /*29px 0*/
    font-size: 1.5rem; /*24px*/
  `;

  const Logo = styled.img`
    margin-top: 4.125rem; /*66px*/
  `

  return (
    <Footer>
      <Logo src="/src/assets/LOGO-white.svg"></Logo>
      <StyledP>© 2020 Kasa. All rights reserved</StyledP>
    </Footer>
  );
}
