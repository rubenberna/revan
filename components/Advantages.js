import { HoseIcon, SunReflection, Breathable, Insulating, Waterproof, PiggyBank } from './Icons';
import advantagesStyles from '../styles/Advantages.module.css'

const Advantages = () => {
  return (
    <div className={advantagesStyles.advantages}>
      <h2 className={advantagesStyles.title}>Aleen maar voordelen</h2>
      <div className={advantagesStyles.gallery}>
        <div className={advantagesStyles.icon}>
          <HoseIcon/>
          <span>Onderhouds-vriendelijk</span>
        </div>
        <div className={advantagesStyles.icon}>
          <SunReflection/>
          <span>Duurzaam</span>
        </div>
        <div className={advantagesStyles.icon}>
          <Breathable/>
          <span>Ademend</span>
        </div>
        <div className={advantagesStyles.icon}>
          <Insulating/>
          <span>Isolerend</span>
        </div>
        <div className={advantagesStyles.icon}>
          <Waterproof/>
          <span>Waterdicht</span>
        </div>
        <div className={advantagesStyles.icon}>
          <PiggyBank/>
          <span>Snel en betaalbaar</span>
        </div>
      </div>
    </div>
  )
}

export default Advantages