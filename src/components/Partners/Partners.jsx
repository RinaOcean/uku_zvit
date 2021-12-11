import Container from '../Container';
import eleksLogo from '../../imgs/partners/eleks_logo.png'
import fbLogo from '../../imgs/partners/facebook _logo.png'
import ssLogo from '../../imgs/partners/ss_logo.png'
import styles from './Partners.module.css';

const Partners = ()=>{
  return(
    <section className={styles.partners}>
      <div className={styles.headingWrapper}>
        <h2>наші партнери</h2>
      </div>
      <Container>
        <ul className={styles.strategyPartWrapper}>
          <li className={styles.strategyPartItem}><img src={eleksLogo}  alt="eleks" /></li>
          <li className={styles.strategyPartItem}><img src={fbLogo}  alt="fb" /></li>
          <li className={styles.strategyPartItem}><img src={ssLogo}  alt="ss" /></li>
        </ul>
      </Container>
    </section>
  )
}

export default Partners;