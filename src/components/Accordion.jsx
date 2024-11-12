import styled from "styled-components";

export default function Accordion({ id, header, details }) {
  function handleClick() {
    let details = document.querySelector(`#${id} + div`);
    let arrow = document.querySelector(`#${id} img`);

    if (arrow.getAttribute("id") === "up") {
      arrow.style = "transition: transform 0.6s; transform: rotate(-180deg);";
      arrow.setAttribute("id", "down");

      details.style =
        "transition: opacity 1s, line-height 0.5s; opacity: 1; line-height: 100%;"
    } else {
      arrow.style = "transition: transform 0.6s; transform: rotate(0deg);";
      arrow.setAttribute("id", "up");

      details.style =
        "transition: opacity 1s, line-height 0.5s, margin-top 0.5s; opacity: 0; line-height: 0%; margin-top: 0;";
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
    font-size: 1.5rem; /*24px*/
    font-weight: bold;
  }

  img {
    position: absolute;
    right: 1.125rem; /*18px*/
    bottom: 1.5rem; /*24px*/
    cursor: pointer;
  }

  .details {
    margin: 0 0 1.25rem 1.25rem; /*0 0 20px 20px*/
    padding-top: 1.562rem; /*25px*/
    font-size: 1.125rem; /*18px*/
    color: #000000;
    opacity: 0;
    line-height: 0%;
    background-color: rgba(246, 246, 246, 0.45);
    border-radius: 0 5px 5px 0;
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

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {
    h2 {
      font-size: 0.812rem; /*13px*/
      margin: 0.625rem; /*10px*/
    }

    img {
      width: 1rem; /*16px*/
      bottom: 0.875rem; /*14px*/
    }

    .details {
      margin: 0 0 1.25rem 1.25rem; /*0 0 20px 20px*/
      padding-top: 0.812rem; /*13px*/
      font-size: 0.75rem; /*12px*/
    }

    ul li {
      font-size: 0.75rem; /*12px*/
    }
  }
`;
