import AppBar from "../../components/AppBar/AppBar";
import Container from "../../components/Container";

import styles from './WhoWeArePage.module.css';
import flag from '../../imgs/whoWeAre/flag.svg';
import employers from '../../imgs/whoWeAre/employers_.svg';
import students from '../../imgs/whoWeAre/students_.svg';

const WhoWeArePage = () => (

  <>
    <AppBar name="Хто ми?"/>
    <Container>
      <section className={styles.section}>
      {/* <div className={styles.wrapper}> */}
        <p className={styles.text}>
          <p>
          Факультет прикладних наук УКУ готує лідерів галузі, що своїми знаннями, 
          навичками і настановами змінюватимуть сьогоднішнє та майбутнє України та світу.
          </p>
          <p>

          </p>

        </p>
        <img className={styles.chartIcon} src={employers}  alt="employers"/>
        <p className={styles.text}>
          Наші бакалаврські програми ‘’Комп’ютерні науки’’, ‘’ІТ та бізнес-аналітика’’, 
          а також дворічна магістерська програма з комп’ютерних наук за спеціалізацією 
          ‘’Науки про дані’’ розширяють фронтири освіти у сфері комп’ютерних наук та 
          інформаційних технологій, а наші випускники – не просто успішні працівники всесвітньовідомих ІТ компаній, вони є лідерами, що готові творити нові продукти і послуги, нові ідеї та нові сенси як у галузі інформаційних технологій, так і в інших сферах людського життя.
        </p>
         <img className={styles.chartIcon} src={students}   alt="students"/>
         <p className={styles.text}>
         Програми факультету розраховані на вмотивованих студентів, націлених на творчу 
         самостійну працю над своїм професійним вдосконаленням і готових нести відповідальність
         за використання унікальних нагод для навчання, які перед ними відкриє ця програма.
        </p>
      {/* </div> */}

      {/* <ul className={styles.list}>
        <li className={styles.item}>
        <div className={styles.imgWrapper}>
          <img className={styles.listIcon} src={icon1} alt="dialog"/></div>
         <span className={styles.text}>наші випускники є тими, хто творять нові робочі місця. Ми активно залучаємо студентів до викладення, науки та бізнес-проектів</span> 
        </li>

        <li className={styles.item}>
         <div className={styles.imgWrapper}>
           <img className={styles.listIcon}  src={icon2} alt="people connections"/></div>
         <span className={styles.text}>сформована alumni спільнота, яка продовжує навчання та формування випускників впродовж життя та залучає їх до різних освітніх ініціатив</span>
        </li>

        <li className={styles.item}>
        <div className={styles.imgWrapper}>
         <img className={styles.listIcon} src={icon3}   alt="people"/></div>
         <span className={styles.text}>сформована потужна команда постійних викладачів як через навчання молодих викладачів, так і через залучення зіркових викладачів. Ми піклуємось про наших працівників та створюємо комфортні умови онбордингу та праці</span>
        </li>

        <li className={styles.item}>
         <div className={styles.imgWrapper}><img className={styles.listIcon}  src={icon4}  alt="note" /></div>
         <span className={styles.text}>науковий доробок та сформована мережа партнерств робить факультет помітним та співмірним з кращими прикладами у співмірних унівеситетах світу</span>
        </li>

        <li className={styles.item}>
         <div className={styles.imgWrapper}><img className={styles.listIcon} src={icon5}   alt="flags" /></div>
         <span className={styles.text}>щодва роки факультет запускає нову сертифікаційну програму, яка у перспективі може стати дипломною</span>
        </li>

        <li className={styles.item}>
         <div className={styles.imgWrapper}><img className={styles.listIcon}  src={icon6} alt="sector" /></div>
         <span className={styles.text}>факультет активно розбудовує спільноту друзів факультету та активно взаємодіє зі спільнотою, зокрема, через консалтинг, запровадження курсів суспільно-орієнтованого навчання та впровадження курсів "цифрового мислення" в світоглядне ядро та/чи загальноуніверситетські курси</span>
        </li>
      </ul> */}
      
      </section>
    </Container>
    
  </>

);

export default WhoWeArePage;