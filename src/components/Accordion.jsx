import styled from "styled-components";

export default function Accordion({ id, header, details }) {
  function handleClick() {
    let details = document.querySelector(`#${id} + div`);
    let arrow = document.querySelector(`#${id} img`);
    
    if (arrow.getAttribute("id") === "up") {
      arrow.style = 'transition: transform 0.6s; transform: rotate(-180deg);';
      arrow.setAttribute("id", "down");

      details.style = 'transition: opacity 1s, line-height 1s; opacity: 1; line-height: normal;'
    } else {
      arrow.style = 'transition: transform 0.6s; transform: rotate(0deg);';
      arrow.setAttribute("id", "up");

      details.style = 'transition: opacity 0s, line-height 1s; opacity: 0; line-height: 0%;'
    }
  }

  return (
    <AccordionContainerStyle>
      <div id={id} className="accordion-header">
        <h2>{header}</h2>
        <img
          id="up"
          onClick={handleClick}
          src="/src/assets/arrow-up.svg"
          alt="arrow"
        />
      </div>
      <div className="details">
        {typeof details === "string" ? (
          <p>{details}</p>
        ) : (
          <ul>
            {details.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        )}
      </div>
    </AccordionContainerStyle>
  );
}

const AccordionContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .accordion-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    width: 100%;
    background-color: #ff6060;
    color: #ffffff;
    border-radius: 10px;
  }

  h2 {
    margin: 0.937rem; /*15px*/
  }

  img {
    position: absolute;
    right: 1.125rem; /*18px*/
    bottom: 1.5rem; /*24px*/
    // transition: transform 0.5s;
    // &:active {
    //   transform: rotate(-3.1416rad);
    // }
  }

  .details {
    margin: 1.562rem 0 0 1.25rem; /*25px 0 0 20px*/
    font-size: 1.125rem; /*18px*/
    color: #000000;
    opacity: 0; 
    line-height: 0%;
  }

  .details ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    justify-content: flex-start;
    background-color: transparent;
    color: #000000;
    font-size: 1.125rem; /*18px*/
    font-weight: 400;
    width: 100%;
    margin-bottom: 0.125rem; /*2px*/
  }
`;
