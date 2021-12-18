import Container from '../Container';
// import eleksLogo from '../../imgs/desktop/partners/eleks_logo.png'
// import fbLogo from '../../imgs/desktop/partners/facebook_logo.png'
// import ssLogo from '../../imgs/desktop/partners/ss_logo.png'
import partners from '../../imgs/mobile/partners/partners.png'
import strategyPartners from '../../imgs/partners/strategy_partners.png'
import styles from './Partners.module.css';

const Partners = ()=>{
  return(
    <section className={styles.partners}>
      <div className={styles.headingWrapper}>
        <span>наші партнери</span>
      </div>
      <Container>
        {/* <ul className={styles.strategyPartWrapper}>
          <li className={styles.strategyPartItem}><img src={eleksLogo}  alt="eleks" /></li>
          <li className={styles.strategyPartItem}><img src={fbLogo}  alt="fb" /></li>
          <li className={styles.strategyPartItem}><img src={ssLogo}  alt="ss" /></li>
        </ul> */}
        <img className={styles.strategyPartners} src={strategyPartners} alt="partners logos"/>
        <img className={styles.allPartners} src={partners} alt="partners logos"/>
      </Container>
    </section>
  )
}

export default Partners;