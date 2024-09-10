import { Hero, MostPopular,GamingLibrary } from "../../section/index";
import { Container } from "../../Components";

const Home = () => {
  return (
    <>
    <Container>
        <Hero />
        <MostPopular />
        <GamingLibrary/>
      </Container>
    </>
  );
};

export default Home;
