import "./GamingLibrary.css";
import {
  GamingLibraryCard,
  SectionHeader,
  SectionWrapper,
} from "../../Components";

import GamingLibraryData from "../../Data/GamingLibraryData";
function GamingLibrary() {
  const cards = GamingLibraryData.map((card) => {
    return (
      <GamingLibraryCard
        key={card.id}
        title={card.title}
        src={card.src}
        category={card.category}
        dataAdded={card.date_added}
        hoursPlayed={card.hours_played}
        download={card.downloaded}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader>
          {" "}
          <em>Your Gaming </em> Library
        </SectionHeader>
        <div className="gaming-library-cards">{cards}</div>
      </SectionWrapper>
    </>
  );
}

export default GamingLibrary;
