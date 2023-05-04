import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Card({ gifSrc, flip = false, onClick, onLoad }) {
  return (
    <div className="flip-container col-4 col-sm-3 p-2" onClick={onClick}>
      <div
        className={`flip-inner shadow border border-primary ${
          flip ? "flip" : ""
        }`}
      >
        <div className="front-side"></div>
        <div className="back-side">
          <img src={gifSrc} alt="Gif Card" onLoad={onLoad} />
        </div>
      </div>
    </div>
  );
}
