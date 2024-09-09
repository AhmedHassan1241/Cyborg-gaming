import {
  GamingLibrary,
  MostPopularClips,
  ProfileHero,
} from "../../section/index";
import "./Profile.css";
import profile from "../../Assets/images/profile.jpg";
import { SectionWrapper } from "../../Components";

const Profile = () => {
  return (
    <>
      <SectionWrapper>
        <ProfileHero src={profile} />
        <MostPopularClips />
      </SectionWrapper>
      <GamingLibrary />
    </>
  );
};

export default Profile;
