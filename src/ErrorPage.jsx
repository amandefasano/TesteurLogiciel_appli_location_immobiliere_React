import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Titre = styled.h1`
    color: #ff6060;
    font-weight: bold;
    font-size: 18rem; /*288px*/
    margin: 8.687rem 0; /*139px 0*/
  `;

  const StyledP = styled.p`
    color: #ff6060;
    font-size: 2.25rem; /*36px*/
    margin-bottom: 8.687rem; /*139px*/
  `;

  const StyledLink = styled(Link)`
    color: #000000;
    font-size: 1.125rem; /*18px*/
    margin-bottom: 8.687rem; /*139px*/
  `;

  return (
    <Page id="error-page">
      <Titre>404</Titre>
      <StyledP>Oups! La page que vous demandez n'existe pas.</StyledP>
      <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
    </Page>
  );
}
