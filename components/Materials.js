import Image from 'next/image';
import materialsStyles from '../styles/Materials.module.css'
import { useScreenSize } from '../utils/useScreenSize';

const defaultWidth = '200px';
const defaultHeight = '100px';

const materialsContent = [
  {
    imagePath: "/images/spuitkurk.png",
    alt: 'spuitkurk',
    title: 'spuitkurk',
    description: 'Spuiten we de spuitkurk rechtstreeks op de gevelstenen, dan behouden die hun oorspronkelijke structuur en uitzicht. Onze spuitkurk kan, door zijn uitzonderlijke hechting, op alle ondergrond worden aangebracht. Hij hecht zich vast op baksteen, pleister, beton, pvc en metalen. Na reiniging van de ondergrond wordt de 2kg/m² rechtstreeks op de te spuiten oppervlakte geplaatst.'
  },
  {
    imagePath: "/images/kurtmortel_spuitkurk.png",
    alt: 'kurtmortel',
    title: 'kurtmortel & spuitkurk',
    description: 'Wanneer na reiniging van uw gevel de voegen zijn aangetast of in het slechtste geval verdwenen zijn, gaan we onze sterk hechtende en herstellende kurkmortel op de gevel plaatsen met een plakmes. Deze wordt na een lichte droging horizontaal ingeborsteld op uw gevel om alle onregelmatigheden en voegen te herstellen. Door het dampopen karakter van onze spuitkurk kunnen we de dag erop al starten met de afwerking van de spuitkurk. Geen droogtijden, geen extra kost voor afbraak en opbouw stellingen. Kortom, sneller werk dat zich positief vertaalt in de kostprijs.'
  },
  {
    imagePath: "/images/uitvlakken_spuitkurk.png",
    alt: 'uitvlakken',
    title: 'uitvlakken & spuitkurk',
    description: 'Wanneer u uw gevel een strakkere look wilt geven of u wilt in het kader van renovatie uw gevel een homogeen uitzicht gaan geven dan wordt uw gevel, alsook na reiniging, gewapend en volledig uitgevlakt. Dit gebeurt ook met een dampopen kalkmortel die onmiddellijk na uitvoering kan afgewerkt worden met onze spuitkurk.'
  },
  {
    imagePath: "/images/isolatie_uitvlakken_spuitkurk.png",
    alt: 'isolatie',
    title: 'isolatie & uitvlakken & spuitkurk',
    description: 'In het kader van een isolatiesysteem kan er een polystereenplaat of geëxpandeerde kurk aan ons systeem worden toegevoegd. Dit kan in verschillende diktes aangewend worden en wordt verlijmd op uw gevel. Hier kan er tegemoet gekomen worden aan de hedendaagse isolatienormen.'
  },
]

const Materials = () => {
  const {width} = useScreenSize();

  return (
    <div className={materialsStyles.materials}>
      <h2 className={materialsStyles.title}>4 gevelsystemen</h2>
      <div className={materialsStyles.display}>
        {materialsContent.map(material => (
            <div key={material.title} className={materialsStyles.material}>
              <Image src={material.imagePath} alt={material.alt} width={defaultWidth} height={defaultHeight}/>
              <div className={materialsStyles.materialInfo}>
                <p className={materialsStyles.materialTitle}>{material.title}</p>
                <p className={materialsStyles.materialDescription}>{material.description}</p>
                { width <= 414 && <hr/> }
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Materials