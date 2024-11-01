import styled from "styled-components";

export default function Accordion({ id, header, details }) {
  function handleClick() {
    let arrow = "";

    switch (id) {
      case "description":
        arrow = document.querySelector("#description img");
        break;
      case "equipment":
        arrow = document.querySelector("#equipment img");
        break;
      case "reliability":
        arrow = document.querySelector("#reliability img");
        break;
      case "respect":
        arrow = document.querySelector("#respect img");
        break;
      case "service":
        arrow = document.querySelector("#service img");
        break;
      case "security":
        arrow = document.querySelector("#security img");
        break;
    }

    if (arrow.getAttribute("id") === "up") {
      arrow.src = "/src/assets/arrow-down.svg";
      arrow.setAttribute("id", "down");
    } else {
      arrow.src = "/src/assets/arrow-up.svg";
      arrow.setAttribute("id", "up");
    }
  }

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `

  const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    background-color: #FF6060;
    color: #ffffff;
    border-radius: 10px;
  `;

  const Arrow = styled.img`
    position: absolute;
    right: 1.125rem; /*18px*/
    top: 1.5rem; /*24px*/
  `

  return (
    <Wrapper>
      <Header id={id} onClick={handleClick} className="accordion-header">
        <h2>{header}</h2>
        <Arrow id="up" src="/src/assets/arrow-up.svg" alt="arrow" />
      </Header>
      <div>{details}</div>
    </Wrapper>
  );
}
