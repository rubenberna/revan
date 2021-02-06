import Form from './Form';
import bannerStyles from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <div className={bannerStyles.banner}>
      <div className={bannerStyles.title}>
        <h1 className={bannerStyles.title}>Natuurlijk en duurzame muurbekleding voor zowel interieur als exterieur.</h1>
      </div>
      <Form/>
    </div>
  );
};

export default Banner;