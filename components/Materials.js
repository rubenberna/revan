import Image from 'next/image';
import materialsStyles from '../styles/Materials.module.css'

const defaultWidth = '200px';
const defaultHeight = '100px';

const Materials = () => {
  return (
    <div className={materialsStyles.materials}>
      <h2 className={materialsStyles.title}>4 gevelsystemen</h2>
      <div className={materialsStyles.display}>
        <div className={materialsStyles.material}>
          <Image src="/spuitkurk.png" alt="SPUITKURK" width={defaultWidth} height={defaultHeight}/>
          <p className={materialsStyles.materialTitle}>spuitkurk</p>
          <p className={materialsStyles.materialDescription}>Spuiten we de spuitkurk rechtstreeks op de gevelstenen, dan behouden die hun oorspronkelijke structuur en uitzicht. Onze spuitkurk kan, door zijn uitzonderlijke hechting, op alle ondergrond worden aangebracht. Hij hecht zich vast op baksteen, pleister, beton, pvc en metalen. Na reiniging van de ondergrond wordt de 2kg/m² rechtstreeks op de te spuiten oppervlakte geplaatst.</p>
        </div>
        <div className={materialsStyles.material}>
          <Image src="/kurtmortel_spuitkurk.png" alt="KURKMORTEL & SPUITKURK" width={defaultWidth} height={defaultHeight}/>
          <p className={materialsStyles.materialTitle}>kurtmortel & spuitkurk</p>
          <p className={materialsStyles.materialDescription}>Wanneer na reiniging van uw gevel de voegen zijn aangetast of in het slechtste geval verdwenen zijn, gaan we onze sterk hechtende en herstellende kurkmortel op de gevel plaatsen met een plakmes. Deze wordt na een lichte droging horizontaal ingeborsteld op uw gevel om alle onregelmatigheden en voegen te herstellen. Door het dampopen karakter van onze spuitkurk kunnen we de dag erop al starten met de afwerking van de spuitkurk. Geen droogtijden, geen extra kost voor afbraak en opbouw stellingen. Kortom, sneller werk dat zich positief vertaalt in de kostprijs.</p>
        </div>
        <div className={materialsStyles.material}>
          <Image src="/uitvlakken_spuitkurk.png" alt="UITVLAKKEN & SPUITKURK" width={defaultWidth} height={defaultHeight}/>
          <p className={materialsStyles.materialTitle}>uitvlakken & spuitkurk</p>
          <p className={materialsStyles.materialDescription}>Wanneer u uw gevel een strakkere look wilt geven of u wilt in het kader van renovatie uw gevel een homogeen uitzicht gaan geven dan wordt uw gevel, alsook na reiniging, gewapend en volledig uitgevlakt. Dit gebeurt ook met een dampopen kalkmortel die onmiddellijk na uitvoering kan afgewerkt worden met onze spuitkurk.</p>
        </div>
        <div className={materialsStyles.material}>
          <Image src="/isolatie_uitvlakken_spuitkurk.png" alt="ISOLATIE & UITVLAKKEN & SPUITKURK" width={defaultWidth} height={defaultHeight}/>
          <p className={materialsStyles.materialTitle}>isolatie & uitvlakken & spuitkurk</p>
          <p className={materialsStyles.materialDescription}>In het kader van een isolatiesysteem kan er een polystereenplaat of geëxpandeerde kurk aan ons systeem worden toegevoegd. Dit kan in verschillende diktes aangewend worden en wordt verlijmd op uw gevel. Hier kan er tegemoet gekomen worden aan de hedendaagse isolatienormen.</p>
        </div>
      </div>
    </div>
  )
}

export default Materials