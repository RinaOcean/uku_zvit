import styles from './Introduction.module.css';
import Container from '../Container'
import decan from '../../imgs/Introduction/dekan.jpg'

const Introduction =() =>{
  return(
    <section className={styles.introduction}>
      <div className={styles.headingWrapper}>
        <span>слово декана</span>
      </div>
      <Container>
      <div className={styles.textWrapper}>
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

        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <img src={decan}  alt="man"/>
          </div>
          <div className={styles.nameWrapper}>
            <span className={styles.name}>Ярослав Притула</span><br/>
            <span>декан факультету прикладних наук УКУ</span>
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default Introduction