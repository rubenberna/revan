import LeadForm from './Form';
import lastCTAstyles from '../styles/LastCTA.module.css';

const LastCTA = () => {
  return (
    <div className={lastCTAstyles.wrapper}>
      <div className={lastCTAstyles.lastCTA}>
        <h3 className={lastCTAstyles.title}>Interesse in spuitkurk, vragen of graag professioneel advies?</h3>
        <p className={lastCTAstyles.description}>Neem dan contact op met de expert in jow regio. Vanaf 11.00u zijn we
          ook bereikbaar via het groene nummer: <span className={lastCTAstyles.phone}>0800/58600</span>.</p>
        <LeadForm visible={true}/>
      </div>
    </div>
  );
};

export default LastCTA;