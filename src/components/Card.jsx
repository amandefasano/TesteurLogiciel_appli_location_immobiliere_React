import styled from "styled-components";

export default function Card({ cover, title }) {
  const Cover = styled.img`
    width: 100%;
    height: 21.25rem; /*340px*/
    // height: 17.937rem; /*287px*/
    border-radius: 10px;
    object-fit: cover;
  `;

  const Title = styled.p`
    color: #ffffff;
    font-size: 1.125rem; /*18px*/
    font-weight: bold;
    position: relative;
    bottom: 5.375rem; /*86px*/
    left: 1.25rem; /*20px*/
  `;

  return (
    <>
      <Cover src={cover}></Cover>
      <Title>{title}</Title>
    </>
  );
}
