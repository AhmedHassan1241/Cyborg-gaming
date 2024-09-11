import "./Clips.css";
import { FaCirclePlay } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
const Clips = ({clip}) => {
  return (
    <>
      <div
        className="card-clip"
        style={{ width: "18rem", position: "relative" }}
      >
      <div style={{position: "relative" }}>
        <img className="clip-card-img card-img-top" src={clip.img} alt="Card" />
        <div className="paly-clip">
          <FaCirclePlay />
        </div>
      </div>
        <div className="clip-card-body">
          <h5 className="clip-card-title">{clip.title}</h5>
          <p className="clip-card-text">
            <span style={{ color: "#ec6090" }}>
              <IoEyeSharp />{" "}
            </span>
            {clip.view}
          </p>
        </div>
      </div>
    </>
  );
};

export default Clips;
