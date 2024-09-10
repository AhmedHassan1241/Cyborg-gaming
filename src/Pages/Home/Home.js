import { Hero, MostPopular,GamingLibrary } from "../../section/index";
import { Container, ViewButton } from "../../Components";

const Home = () => {
  return (
    <>
    <Container>
        <Hero />
        <MostPopular >
        <ViewButton>
        Discover Popular
      </ViewButton>
        </MostPopular>
        <GamingLibrary>
          <ViewButton>
          View Your Library
          </ViewButton>
        </GamingLibrary>
      </Container>
    </>
  );
};

export default Home;
