import { Icon } from 'semantic-ui-react'
import howIsItMadeStyles from '../styles/HowIsItMade.module.css'

const HowIsItMade = () => {
  return (
    <div className={howIsItMadeStyles.wrapper}>
      <div className={howIsItMadeStyles.imageFrame}/>
      <div className={howIsItMadeStyles.link}>
        <a>Hoe wordt spuitkurk gemaakt? <Icon name="angle right"/></a>
      </div>
    </div>
  )
}

export default HowIsItMade
