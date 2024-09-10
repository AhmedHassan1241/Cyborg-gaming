import { Card, SectionHeader, SectionWrapper } from "../../Components";
import mostPopularData from "../../Data/MostPopularData";
import "./MostPopular.css";
const MostPopular = (props) => {
    const cards= mostPopularData.map(card=>(
        <Card card={card} key={card.id}/>
    ))

  return (
    <>
      <SectionWrapper>
        <SectionHeader>
            <span>Most Popular</span> Right Now
        </SectionHeader>
          <div className="cards">
          {cards}
          </div>
      {props.children}
      </SectionWrapper>
    </>
  );
};

export default MostPopular;
