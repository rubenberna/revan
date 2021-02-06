import { server } from '../config/server';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import Advantages from '../components/Advantages';

export default function Home ({ leads }) {
  console.log(leads);
  return (
    <div>
      <Banner/>
      <Introduction/>
      <Advantages/>
    </div>
  );
}

// on build
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/leads/get`);
  const leads = await res.json();

  return {
    props: {
      leads
    }
  };
};
