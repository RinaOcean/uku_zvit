import styles from './Introduction.module.css';
import Container from '../Container'
import decan from '../../imgs/Introduction/rector.png'

const Introduction =() =>{
  return(
    <section className={styles.introduction}>
      <div className={styles.headingWrapper}>
        <h2>слово декана</h2>
      </div>
      <Container>
      <div className={styles.introductionTextWrapper}>
        <p className={styles.introductionText}>
          <h3>Слава Ісусу Христу!<br/>
          Дорогі у Христі брати і сестри!</h3>
          Сказати, що минулий навчльний рік був особливим, 
          це майже нічого не сказати. Ми усі відчули на собі, як на ходу доводиться змінювати 
          плани, відмовлятися від задуманого, напружуватися, щоб не втратити досягнутого важкою 
          працею. На жаль, чимало із запланованого на початку року довелося відкласти. На жаль, 
          багато зусиль було прикладено для пом’якшення кризи, викликаної світовими пандемією і 
          супутніми економічними негараздами, а а не на розвиток і рух уперед. І на жаль, криза 
          ще не минула... Кризи вже бували в історії УКУ. І після кожної з них наш Університет 
          тільки інституцією, яка навчає, а й яка навчається.
        </p>

        <div className={styles.imgWrapper}>
          <img src={decan} width="333" height="411" alt="man"/>
          <div className={styles.nameWrapper}>
            <span className={styles.name}>о. д-р Богдан Прах</span><br/>
            <span>ректор УКУ</span>
          </div>
          
        </div>
      </div>
      </Container>
    </section>
  )
}

export default Introduction