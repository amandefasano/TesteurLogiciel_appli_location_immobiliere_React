import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <NavbarContainerStyled>
        <img src="/src/assets/LOGO.svg"></img>
        <div>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/about">A propos</StyledLink>
        </div>
      </NavbarContainerStyled>
    </>
  );
}

const NavbarContainerStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 2.812rem 0 3.125rem; /*45px 0 50px*/

  img {
    width: 13.125rem; /*210px*/;
    height: 4.25rem; /*68px*/;
  }

  div {
    display: flex;
    align-items: center;
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
@media (max-width: 376px) {
  margin: 1.25rem 0 1.687rem; /*20px 0 27px*/

  img {
    width: 9.062rem; /*145px*/;
    height: 2.937rem; /*47px*/;
  }
}
`;

const StyledLink = styled(NavLink)`
  font-size: 1.5rem; /*24px*/
  font-weight: 500;
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  margin-left: 3.562rem; /*57px*/
  &.active {
    text-decoration: underline;
    cursor: default;
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
@media (max-width: 376px) {
  font-size: 0.75rem; /*12px*/  
  margin-left: 1.625rem; /*26px*/
}
`;
