import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  return (
    <ErrorPageContainerStyled id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
    </ErrorPageContainerStyled>
  );
}

const ErrorPageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #ff6060;
    font-weight: bold;
    font-size: 18rem; /*288px*/
    margin: 8.687rem 0; /*139px 0*/
  }

  p {
    color: #ff6060;
    font-size: 2.25rem; /*36px*/
    margin-bottom: 8.687rem; /*139px*/
  }
`;

const StyledLink = styled(Link)`
  color: #000000;
  font-size: 1.125rem; /*18px*/
  margin-bottom: 8.687rem; /*139px*/
`;
