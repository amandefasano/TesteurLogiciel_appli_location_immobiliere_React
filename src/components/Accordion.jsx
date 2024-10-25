export default function Accordion({ id, header, details }) {
  function handleClick() {
    let accordion_header = "";
    let arrow = "";

    if (id === "description-acc") {
      accordion_header = document.getElementById("description");
      arrow = document.querySelector("#description img");
    } else {
      accordion_header = document.getElementById("equipment");
      arrow = document.querySelector("#equipment img");
    }

    if (arrow.getAttribute("id") === "up") {
      arrow.src = "/src/assets/arrow-down.svg";
      arrow.setAttribute("id", "down");
    } else {
      arrow.src = "/src/assets/arrow-up.svg";
      arrow.setAttribute("id", "up");
    }
  }

  return (
    <>
      <div id={id === "description-acc" ? "description" : "equipment"} onClick={handleClick} className="accordion-header">
        <h2>{header}</h2>
        <img id="up" src="/src/assets/arrow-up.svg" alt="arrow" />
      </div>
      <p>{details}</p>
    </>
  );
}
