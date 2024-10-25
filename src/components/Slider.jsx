export default function Slider({ photos }) {
  let j = 0;

  /* Event listener on left arrow */
  function handleLeftArrowClick() {
    let pagination = document.getElementById("picture");
    let slider_img = document.querySelector(".slider_img");

    j--;

    // Loop condition
    if (j < 0) {
      j = photos.length - 1;
    }

    // change pagination
    pagination.innerText = j + 1;

    // change image
    slider_img.src = photos[j];
  }

  /* Event listener on right arrow */
  function handleRightArrowClick() {
    let pagination = document.getElementById("picture");
    let slider_img = document.querySelector(".slider_img");

    j++;

    // // Loop condition
    if (j >= photos.length) {
      j = 0;
    }

    // change pagination
    pagination.innerText = j + 1;

    // change the image
    slider_img.src = photos[j];
  }

  return (
    <div id="slider">
      <img className="slider_img" src={photos[0]} alt="Location pictures" />
      <div className="arrow">
        <img
          onClick={handleLeftArrowClick}
          className="arrow_left"
          src="/src/assets/arrow-left.svg"
          alt="Slider left arrow"
        />
        <img
          onClick={handleRightArrowClick}
          className="arrow_right"
          src="/src/assets/arrow-right.svg"
          alt="Slider right arrow"
        />
      </div>
      <p className="pagination">
        <span id="picture">1</span>/{photos.length}
      </p>
    </div>
  );
}
