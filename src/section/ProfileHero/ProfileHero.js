import {
  OffBtn,
  SecondaryButton,
  SectionWrapper,
} from "../../Components";
import "./ProfileHero.css";
import profHero from "../../Assets/images/profile.jpg";
const ProfileHero = (props) => {
  return (
    <>
      <SectionWrapper>
        <div className="card-hero row">
          <div className="card-img col-sm-12 col-md-5 col-lg-4">
            <img
              className="prof-card-img-top"
              src={profHero}
              alt="Card Hero"
            />
          </div>
            <div className="card-body col-sm-12 col-md-5 col-lg-3">
              <OffBtn>Offline</OffBtn>
              <h4 className="hero-card-title">Alan Smithee</h4>
              <p className="hero-card-textt">
              You Haven't Gone Live yet. Go Live By Touching The Button Below.
              </p>
              <SecondaryButton>Start Live Stream </SecondaryButton>
            </div>
            <div className="hero-section col-sm-12 col-md-12 col-lg-4">
            <ul>
            <li className="list-section d-flex justify-content-between"><p>Games Downloaded</p><span>3</span></li>
            <li className="list-section d-flex justify-content-between"><p>Friends Online</p><span>16</span></li>
            <li className="list-section d-flex justify-content-between"><p>Live Streams</p><span>None</span></li>
            <li className="list-section d-flex justify-content-between"><p>Clips</p><span>29</span></li>
            </ul>
            </div>
        </div>
        {props.children}
      </SectionWrapper>
    </>
  );
};

export default ProfileHero;
