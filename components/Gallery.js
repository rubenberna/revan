import Image from 'next/image';
import galleryStyles from '../styles/Gallery.module.css';

const imagesPaths = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpeg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.jpeg',
  '/images/11.jpeg',
  '/images/22.jpeg',
  '/images/21.jpeg',
  '/images/20.jpeg',
  '/images/19.jpeg',
  '/images/18.jpeg',
  '/images/17.jpeg',
  '/images/16.jpeg',
  '/images/15.jpeg',
  '/images/14.jpeg',
  '/images/13.jpeg',
  '/images/12.jpeg',
];

const Gallery = () => {
  return (
    <div className={galleryStyles.wrapper}>
      <h2 className={galleryStyles.title}>Realisaties</h2>
      <div className={galleryStyles.gallery}>
        {imagesPaths.map(image => (
          <Image key={image} src={image} alt={image} width={170} height={130} className={galleryStyles.image}/>
        ))}
      </div>
      <div className={galleryStyles.link}>
        <a href="https://revan.be/nl/spuitkurk/spuitkurk-realisaties/exterieur?">Bekijk meer realisaties</a>
      </div>
    </div>
  );
};

export default Gallery;