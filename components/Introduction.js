import LeadForm from './Form';
import { useScreenSize } from '../utils/useScreenSize';
import introStyles from '../styles/Introduction.module.css';

const Introduction = () => {
  const {width} = useScreenSize();

  return (
    <>
      <div className={introStyles.intro}>
        <h2 className={introStyles.title}>Titel dat aandacht trekt naar contact formulier.</h2>
        <p>Iets meer uitleg over wat ze kunnen verwachten bij contact? Om op die manier al een beetje schifting te maken
          van mensen die echt interesse hebben. Niet te veel uitleg, tenzij je in puntjes kan werken (stap 1,...). In
          het formulier zijn alle venden verplicht. Telefoon geven mensen enkel wanner ze zekerder zijn dat ze contact
          willen.</p>
      </div>
      <LeadForm visible={width <= 414}/>
    </>
  );
};

export default Introduction;