import "./Card.css";
import { FaStar } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const Card = ({ card }) => {
  return (
    <>
    <div className="my-card">
      <div className="card-body">
        <div className="card-img">
          <img src={card.img} alt=".."></img>
        </div>
        <div className="card-title d-flex justify-content-around">
          <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>{card.title}</h4>
          <p style={{ fontSize: "14px" }}>
            <span style={{ color: "yellow" }}>
              <FaStar />
            </span>{" "}
            {card.rate}
          </p>
        </div>
        <div className="card-subtitle d-flex justify-content-around">
          <span
            style={{
              fontSize: "13px",
              fontWeight: "400",
              color: "rgb(102, 102, 102)",
            }}
          >
            {card.category}
          </span>
          <p style={{ fontSize: "14px" }}>
            <span style={{ color: "#ec6090" }}>
              <FaDownload />
            </span>{" "}
            {card.downNumber}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
