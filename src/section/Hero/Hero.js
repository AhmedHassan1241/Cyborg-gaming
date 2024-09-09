import { PrimaryButton } from "../../Components";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle">Welocome To Cyborg</h6>
        <h2 className="hero-title">
          <em>Browse</em>Our Popular Games Here
        </h2>
        <PrimaryButton>
            Browse Now
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Hero;
