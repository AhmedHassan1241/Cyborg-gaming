import "./GamingLibrary.css";
import {
  GamingLibraryCard,
  PrimaryButton,
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
          <span>Your Gaming </span> Library
        </SectionHeader>
        <div className="gaming-library-cards mb-5">{cards}</div>
        <div className="viewLibraryBtn">
        <PrimaryButton>
          View Your Library
        </PrimaryButton>
        </div>
      </SectionWrapper>
    </>
  );
}

export default GamingLibrary;
