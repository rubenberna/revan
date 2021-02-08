import Image from 'next/image';
import { Facebook, Instagram } from './Icons';
import footerStyles from '../styles/Footer.module.css'
import { useScreenSize } from '../utils/useScreenSize';

const Footer = () => {
  const { width } = useScreenSize()

  const renderCompanyDetails = () => (
    <>
      <div className={footerStyles.companyDetails}>
        <ul>
          <li><a>ondernemings Nr:</a></li>
          <li>0869.721.202</li>
        </ul>
      </div>
      <div className={footerStyles.socialMedia}>
        <a href="https://nl-nl.facebook.com/revan.spuitkurk/"><Facebook/></a>
        <a href="https://www.instagram.com/revan_spuitkurk/"><Instagram/></a>
      </div>
    </>
  )

  return (
    <div className={footerStyles.wrapper}>
      <div className={footerStyles.footer}>
        <div className={footerStyles.logo}>
          <Image src={'/images/logo_green.png'} alt="Revan" width={165} height={31}/>
          {
            width <= 768 && renderCompanyDetails()
          }
        </div>
        {
          width > 375 &&
          <div>
            <ul>
              <li><a href="https://revan.be/nl/nieuws">Niews</a></li>
              <li><a href="https://revan.be/nl/blog">Blog</a></li>
              <li><a href="https://revan.be/nl/contact">Contact</a></li>
              <li><a href="https://revan.be/nl/offerte">Offerte</a></li>
              <li>051 24 83 54</li>
            </ul>
          </div>
        }
        {
          width > 414 &&
          <div>
            <ul>
              <li><a href="https://revan.be/nl/vloeren">Vloeren</a></li>
              <li><a href="https://revan.be/nl/spuitkurk">Spuitkurk</a></li>
              <li><a href="https://revan.be/nl/traprenovatie">Traprenovatie</a></li>
              <li><a href="https://revan.be/nl/Privacy-Policy">Privacy Policy</a></li>
            </ul>
          </div>
        }
        {
          width > 768 && renderCompanyDetails()
        }
      </div>
    </div>
  )
}

export default Footer;