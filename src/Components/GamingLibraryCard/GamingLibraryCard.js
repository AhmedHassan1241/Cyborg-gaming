import "./GamingLibraryCard.css";
import { SecondaryButton } from "../../Components/index";

const GamingLibraryCard = ({ game }) => {
  return (
    <div className="gaming-library-card">
      <ul>
        <li>
          <img src={game.src} alt="" />
        </li>
        <li>
          <h4>{game.title}</h4>
          <span>{game.category}</span>
        </li>
        <li>
          <h4>Date Added</h4>
          <span>{game.dataAdded}</span>
        </li>
        <li>
          <h4>Hours Played</h4>
          <span>{game.hoursPlayed}</span>
        </li>
        <li>
          <h4>Currently</h4>
          <span>{game.download}</span>
        </li>
        <SecondaryButton>{game.download}</SecondaryButton>
      </ul>
    </div>
  );
};

export default GamingLibraryCard;
