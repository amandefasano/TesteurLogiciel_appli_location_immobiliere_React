import { useState } from "react";
import styled from "styled-components";

export default function Accordion({ id, header, details }) {
  let [open, setOpen] = useState(false);

  return (
    <AccordionContainerStyled id={id} className={open ? "open" : ""}>
      <div className="accordion-header">
        <h2>{header}</h2>
        <img
          onClick={() => setOpen(!open)}
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
    </AccordionContainerStyled>
  );
}

const AccordionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  position: relative;

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
    transition: transform 0.6s;
  }

  &.open img {
    transform: rotate(-180deg);
  }

  .details {
    margin-left: 1.25rem; /*20px*/
    padding-top: 1.562rem; /*25px*/
    font-size: 1.125rem; /*18px*/
    color: #000000;
    background-color: rgba(246, 246, 246, 0.45);
    border-radius: 0 5px 5px 0;
    transition: top 0.3s;
    position: absolute;
    top: -89%;
    z-index: -1;
  }

  &.open .details {
    position: relative;
    top: 0;
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
      padding-top: 0.812rem; /*13px*/
      font-size: 0.75rem; /*12px*/
    }

    ul li {
      font-size: 0.75rem; /*12px*/
    }
  }
`;
