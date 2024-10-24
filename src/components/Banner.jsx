export default function Banner({img_src, p}) {
  return (
    <>
      <img src={img_src}></img>
      <p className={p? "banner-text" : "display-none"}>{p}</p>
    </>
  );
}
