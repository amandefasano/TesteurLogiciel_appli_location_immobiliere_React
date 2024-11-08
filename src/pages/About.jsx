import Banner from "../components/Banner";
import Accordion from "../components/Accordion";
import styled from "styled-components";

export default function About() {
  const reliability =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  const respect =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const service =
    "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.";
  const security =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <AboutContainerStyled>
      <Banner className="banner" img_src={"/src/assets/about-banner.png"} />
      <div className="accordion">
        <Accordion id="reliability" header="Fiabilité" details={reliability} />
      </div>
      <div className="accordion">
        <Accordion id="respect" header="Respect" details={respect} />
      </div>
      <div className="accordion">
        <Accordion id="service" header="Service" details={service} />
      </div>
      <div className="accordion">
        <Accordion id="security" header="Sécurité" details={security} />
      </div>
    </AboutContainerStyled>
  );
}

const AboutContainerStyled = styled.section`
  margin: 0;

  #reliability {
    margin-top: 2.375rem; /*38px*/
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {
    #reliability {
      margin-top: 1.187rem; /*19px*/
    }
  }
`;
