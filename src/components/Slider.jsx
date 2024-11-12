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

  return (
    <GalleryContainerStyled id="slider">
      <img className="slider_img" src={photos[0]} alt="Location pictures" />
      <div className={photos.length === 1 ? "hidden" : "arrows"}>
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
      <p className={photos.length === 1 ? "hidden" : "pagination"}>
        <span id="picture">1</span>/{photos.length}
      </p>
    </GalleryContainerStyled>
  );
}

const GalleryContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 25.937rem; /*415px*/

  .slider_img {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }

  .arrow_left {
    position: absolute;
    width: 2.937rem; /*47px*/
    height: 4.937rem; /*79px*/
    top: 9.268rem; /*148.3px*/
    left: 1.46rem; /*23.36px*/
    cursor: pointer;
  }

  .arrow_right {
    position: absolute;
    width: 2.937rem; /*47px*/
    height: 4.937rem; /*79px*/
    top: 9.268rem; /*148.3px*/
    right: 1.46rem; /*23.36px*/
    cursor: pointer;
  }

  .pagination {
    position: absolute;
    left: 50%;
    bottom: 1.557rem; /*24.92px*/
    color: #ffffff;
    font-size: 1.125rem; /*18px*/
    font-weight: 500;
    margin: 0;
  }

  .hidden {
    display: none;
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
  @media (max-width: 376px) {
    height: 15.937rem; /*255px*/

    .arrow_left {
      width: 0.75rem; /*12px*/
      height: 1.25rem; /*20px*/
      top: 7.381rem; /*118.1px*/
      left: 0.365rem; /*5.84px*/
    }

    .arrow_right {
      width: 0.75rem; /*12px*/
      height: 1.25rem; /*20px*/
      top: 7.381rem; /*118.1px*/
      right: 0.365rem; /*5.84px*/
    }

    .pagination {
      display: none;
    }
  }
`;
