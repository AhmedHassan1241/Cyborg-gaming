import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Footer, Header } from "./section";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './Pages/Profile/Profile';
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
      <Header />
      <Container>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        </Routes>
        </Container>
      <Footer />
      </Router>
    </>
  );
}

export default App;
