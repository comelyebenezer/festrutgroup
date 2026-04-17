import { useEffect } from 'react';
import Header from '../__public/__layouts/Header';
import Map from '../__public/__sections/_Map';
import MissionCEO from '../__public/__sections/About/MissionCEO';
import BannerAbout from '../__public/__sections/_Banner_about';
import OurTeam from '../__public/__sections/_OurTeam';

const About = (props) => {
  useEffect(() => {
    document.title = `${props.company} — About`;
  }, [props.company]);

  return (
    <>    
    <Header />

    <BannerAbout />

    <MissionCEO />

    <OurTeam />

    <Map />
    </>
  );
}
export default About;