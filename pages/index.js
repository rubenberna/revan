import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import Advantages from '../components/Advantages';
import Materials from '../components/Materials';
import LastCTA from '../components/LastCTA';
import Gallery from '../components/Gallery';
import HowIsItMade from '../components/HowIsItMade';
import Footer from '../components/Footer';

export default function Home () {
  return (
    <div>
      <Banner/>
      <Introduction/>
      <Advantages/>
      <Materials/>
      <LastCTA/>
      <Gallery/>
      <HowIsItMade/>
      <Footer/>
    </div>
  );
}
