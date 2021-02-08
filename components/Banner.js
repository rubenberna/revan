import Form from './Form';
import { useScreenSize } from '../utils/useScreenSize';
import bannerStyles from '../styles/Banner.module.css';

const Banner = () => {
  const { width } = useScreenSize()

  return (
    <div className={bannerStyles.banner}>
      <div className={bannerStyles.title}>
        <h1 className={bannerStyles.title}>Natuurlijk en duurzame muurbekleding voor zowel interieur als exterieur.</h1>
      </div>
      <Form position={'right'} visible={width > 414}/>
    </div>
  );
};

export default Banner;