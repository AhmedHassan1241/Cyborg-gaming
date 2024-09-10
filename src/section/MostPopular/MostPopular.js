import { Card, PrimaryButton, SectionHeader, SectionWrapper } from "../../Components";
import mostPopularData from "../../Data/MostPopularData";
import "./MostPopular.css";
const MostPopular = () => {
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
        <div className="discoverPopular">
      <PrimaryButton>
        Discover Popular
      </PrimaryButton>
        </div>
      </SectionWrapper>
    </>
  );
};

export default MostPopular;
