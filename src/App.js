import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "./Components";
import { Footer, Header, Hero, MostPopular } from "./section";

function App() {
  return (
    <div className="all">
      <Header />
      <Container>
        <Hero />
        <MostPopular />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
