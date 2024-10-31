import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 2.812rem 0 3.125rem; /*45px 0 50px*/
  `;

  const Logo = styled.img`
    width: 13.125rem /*210px*/;
    height: 4.25rem /*68px*/;
  `;

  const NavLinks = styled.div`
  display: flex;
  align-items: center;
  `;

  const StyledLink = styled(NavLink)`
    font-size: 1.5rem; /*24px*/
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    margin-left: 3.562rem; /*57px*/
    &.active {
      text-decoration: underline;
      cursor: default;
    }
  `;

  return (
    <>
      <Navbar>
        <Logo src="/src/assets/LOGO.svg"></Logo>
        <NavLinks>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/about">A propos</StyledLink>
        </NavLinks>
      </Navbar>
    </>
  );
}
