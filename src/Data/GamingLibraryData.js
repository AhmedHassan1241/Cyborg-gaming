import popular_01 from "../Assets/images/clip-04.jpg";
import popular_02 from "../Assets/images/popular-01.jpg";
import popular_03 from "../Assets/images/popular-02.jpg";
import { GamingLibrary } from '../../section/index'; // Assuming this is the default export

const GamingLibraryData = () => {
  const games = [
    {
      id: 1,
      title: "Dota 2",
      src: popular_01,
      category: "Sandbox",
      date_added: "24/08/2023",
      hours_played: "634 H 22 Mins",
      downloaded: "Downloaded",
    },
    {
      id: 2,
      title: "Fortnite",
      src: popular_02,
      category: "Battle S",
      date_added: "22/06/2026",
      hours_played: "740 H 52 Mins",
      downloaded: "Download",
    },
    {
      id: 3,
      title: "CS_GO",
      src: popular_03,
      category: "Steam-X",
      date_added: "21/04/2023",
      hours_played: "892 H 14 Mins",
      downloaded: "Downloaded",
    },
  ];
  return (
    <>
        <GamingLibrary games={games} />

    </>
  )
}

export default GamingLibraryData;



