export default function Card({cover, title}) {
  return (
    <>
      <img src={cover}></img>
      <p>{title}</p>
    </>
  );
}
