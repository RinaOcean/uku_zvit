import Container from '../Container';

import partners from '../../imgs/partners/partners.jpg'
import strategyPartners from '../../imgs/partners/strategy_partners.png'
import styles from './Partners.module.css';

const Partners = ()=>{
  return(
    <section className={styles.partners}>
      <div className={styles.headingWrapper}>
        <span>наші партнери</span>
      </div>
      <Container>
        <p className={styles.text}>
        Завдяки підтримці компаній-партнерів факультет прикладних наук має змогу
        надавати стипендії найкращим студентам. Також спільно з спеціалістами цих 
        компаній ми організовуємо курси, зимові та літні школи, мітапи та багато іншого, 
        що допомагає студентам покращувати свої знання та навички у сфері ІТ.
        </p>
        <h3 className={styles.partnersHeading}>Стратегічні партнери:</h3>
        <img className={styles.strategyPartners} src={strategyPartners} alt="partners logos"/>
        <h3 className={styles.partnersHeading}>Партнери:</h3>
        <img className={styles.allPartners} src={partners} alt="partners logos"/>
      </Container>
    </section>
  )
}

export default Partners;