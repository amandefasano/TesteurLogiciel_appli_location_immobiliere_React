import styled from "styled-components";

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

  const Gallery = styled.div`
    position: relative;
    width: 100%;
    height: 25.937rem; /*415px*/
  `;

  const Picture = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  `;

  const Arrows = styled.div`
    position: relative;
    &.hidden {
      display: none;
    }
  `;

  const ArrowLeft = styled.img`
    position: absolute;
    top: 9.268rem; /*148.3px*/
    left: 1.46rem; /*23.36px*/
    cursor: pointer;
  `;

  const ArrowRight = styled.img`
    position: absolute;
    top: 9.268rem; /*148.3px*/
    right: 1.46rem; /*23.36px*/
    cursor: pointer;
  `;

  const Pagination = styled.p`
    position: absolute;
    left: 50%;
    bottom: 1.557rem; /*24.92px*/
    color: #ffffff;
    font-size: 1.125rem; /*18px*/
    font-weight: 500;
    margin: 0;
    &.hidden {
      display: none;
    }
  `;

  return (
    <Gallery id="slider">
      <Picture className="slider_img" src={photos[0]} alt="Location pictures" />
      <Arrows id="arrows" className={photos.length === 1 ? "hidden" : "shown"}>
        <ArrowLeft
          onClick={handleLeftArrowClick}
          className="arrow_left"
          src="/src/assets/arrow-left.svg"
          alt="Slider left arrow"
        />
        <ArrowRight
          onClick={handleRightArrowClick}
          className="arrow_right"
          src="/src/assets/arrow-right.svg"
          alt="Slider right arrow"
        />
      </Arrows>
      <Pagination className={photos.length === 1 ? "hidden" : "pagination"}>
        <span id="picture">1</span>/{photos.length}
      </Pagination>
    </Gallery>
  );
}
