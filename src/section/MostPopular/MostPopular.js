import { Card } from "../../Components";
import mostPopularData from "../../Data/MostPopularData";
import "./MostPopular.css";
const MostPopular = () => {
    const card= mostPopularData.map(card=>(
        <Card card={card}/>
    ))

  return (
    <>
      <div className="mostPopular-main">
        <div className="mostPopular-title">
          <h4>
            <span>Most Popular</span> Right Now
          </h4>
          <div className="cards">
          {card}
          </div>
        </div>
      
      </div>
    </>
  );
};

export default MostPopular;
