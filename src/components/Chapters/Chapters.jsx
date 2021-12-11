import styles from './Chapters.module.css';
import Container from '../Container'

const Chapters =()=>{
  return (
    <section className={styles.chapters}>
      <Container>
        <ul className={styles.itemsWrapper}>
          <li className={styles.item}><span>Результати вступної кампанії</span></li>
          <li className={styles.item}><span>Стратегічні цілі факультету 2025</span></li>
          <li className={styles.item}><span>Структурні зміни</span></li>
          <li className={styles.item}><span>Стдентські перемоги</span></li>
          <li className={styles.item}><span>Успіхи викладачів</span></li>
          <li className={styles.item}><span>Суспільно-орієнтовані проекти</span></li>
          <li className={styles.item}><span>Сертифіка-ційні програми</span></li>
          <li className={styles.item}><span>Події на факультеті</span></li>
          <li className={styles.item}><span>Наука</span></li>
          <li className={styles.item}><span>Інше</span></li>
        </ul>
      </Container>
    </section>
  )
}

export default Chapters