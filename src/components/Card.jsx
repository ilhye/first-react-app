import CardCSS from "../styles/Card.module.css";
import myImage from "../assets/funnyPic.jpg";

export default function Card() {
  return (
    <>
      <h1 className={CardCSS.headingCard}>Card</h1>
      <div className={CardCSS.card}>
        <div className="card-body">
          <h1 className={CardCSS["card-title"]}>React Card</h1>
          <img className={CardCSS["card-img-top"]} src={myImage} alt="Vite" />
          <p className={CardCSS.text}>Bro Code tutorial</p>
        </div>
      </div>
    </>
  );
}
