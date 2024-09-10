import "./GamingLibraryCard.css";
import { SecondaryButton } from "../../Components/index";

const GamingLibraryCard = (props) => {
  return (
  <>
    <div className="gaming-library-card" key={props.id}>
      <ul>
        <li style={{textAlign:"center",width:"fit-content"}}>
          <img src={props.src} alt="" />
        </li>
        <li>
          <h4>{props.title}</h4>
          <span>{props.category}</span>
        </li>
        <li>
          <h4>Date Added</h4>
          <span>{props.dataAdded}</span>
        </li>
        <li>
          <h4>Hours Played</h4>
          <span>{props.hoursPlayed}</span>
        </li>
        <li>
          <h4>Currently</h4>
          <span>{props.download}</span>
        </li>
        <div style={{margin:"15px 0"}}>
        <SecondaryButton>{props.download}</SecondaryButton>
        </div>
      </ul>
    </div>
    <hr style={{width:"90%",margin:"auto",opacity:"10%"}} />
    </>
  );
};

export default GamingLibraryCard;
