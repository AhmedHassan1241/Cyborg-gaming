import { GamingLibrary, MostPopularClips, ProfileHero } from "../../section/index";
import { Container } from "../../Components";

const Profile = () => {
  return (
    <>
      <Container>
        <ProfileHero>
        <hr style={{opacity:"20%", marginTop:"25px",marginBottom:"50px"}}></hr>
        <MostPopularClips/>
        </ProfileHero>
        <GamingLibrary />
      </Container>
    </>
  );
};

export default Profile;
