import {Link,useNavigate} from "react-router-dom";
import styles from './Chapters.module.css';
import Container from '../Container'

const Chapters =()=>{
  let navigate = useNavigate();
  return (
    <section className={styles.chapters}>
      <Container>
      <nav className={styles.itemsWrapper}>
          <Link className={styles.item} to='/introductory-campaign-results'>Результати вступної кампанії</Link>
          <Link className={styles.item} to='/strategy-goals'>Стратегічні цілі факультету 2025</Link>
          <Link className={styles.item} to='/structure-changes'>Структурні зміни</Link>
          <Link className={styles.item} to='/students-wins'>Стдентські перемоги</Link>
          <Link className={styles.item} to='/proffesors-wins'>Успіхи викладачів</Link>
          <Link className={styles.item} to='/social-projects'>Суспільно-орієнтовані проекти</Link>
          <Link className={styles.item} to='/certificate-programs'>Сертифікаційні програми</Link>
          <Link className={styles.item} to='/events'>Події на факультеті</Link>
          <Link className={styles.item} to='/science'>Наука</Link>
          <Link className={styles.item} to='/other'>Інше</Link>
        </nav>
        {/* <ul className={styles.itemsWrapper}>
          <li className={styles.item}><span>Результати вступної кампанії</span></li>
          <li className={styles.item} onClick={() => navigate('/strategichni-cili')}><span>Стратегічні цілі факультету 2025</span></li>
          <li className={styles.item}><span>Структурні зміни</span></li>
          <li className={styles.item}><span>Стдентські перемоги</span></li>
          <li className={styles.item}><span>Успіхи викладачів</span></li>
          <li className={styles.item}><span>Суспільно-орієнтовані проекти</span></li>
          <li className={styles.item}><span>Сертифіка-ційні програми</span></li>
          <li className={styles.item}><span>Події на факультеті</span></li>
          <li className={styles.item}><span>Наука</span></li>
          <li className={styles.item}><span>Інше</span></li>
        </ul> */}
      </Container>
    </section>
  )
}

export default Chapters