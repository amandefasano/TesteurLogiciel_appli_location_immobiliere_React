import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const msg = "Oups! La page que\nvous demandez n'existe pas.";

  return (
    <ErrorPageContainerStyled id="error-page">
      <h1>404</h1>
      <p>{msg}</p>
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
    font-weight: 500;
    margin-bottom: 8.687rem; /*139px*/
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {
    h1 {
      font-size: 6rem; /*96px*/
      margin: 5.375rem 5.531rem 7.062rem; /*86px 88.5px 113px*/
    }

    p {
      font-size: 1.125rem; /*18px*/
      text-align: center;
      white-space: pre-wrap;
      margin-bottom: 7.062rem; /*113px*/
    }
  }
`;

const StyledLink = styled(Link)`
  color: #000000;
  font-size: 1.125rem; /*18px*/
  font-weight: 500;
  margin-bottom: 8.687rem; /*139px*/

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {
    font-size: 0.875rem; /*14px*/
    margin-bottom: 7.062rem; /*113px*/
  }
`;
