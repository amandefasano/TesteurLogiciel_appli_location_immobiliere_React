import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <img src="/src/assets/LOGO.svg"></img>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">A propos</NavLink>
    </>
  );
}
