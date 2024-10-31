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

    // if (id === "description-acc") {
    //   accordion_header = document.getElementById("description");
    //   arrow = document.querySelector("#description img");
    // } else {
    //   accordion_header = document.getElementById("equipment");
    //   arrow = document.querySelector("#equipment img");
    // }

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
      <div id={id} onClick={handleClick} className="accordion-header">
        <h2>{header}</h2>
        <img id="up" src="/src/assets/arrow-up.svg" alt="arrow" />
      </div>
      <p>{details}</p>
    </>
  );
}
