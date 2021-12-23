import AppBar from "../../components/AppBar/AppBar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";


import imgSmall from '../../imgs/mobile/structure-changes-mob.jpg'
import imgBig from '../../imgs/desktop/structure-changes-desk.jpg'

import styles from './StructureChangesPage.module.css';

const StructureChangesPage = () => (
  <>
  <AppBar name="Структурні зміни"/>
  <Container>
  <section className={styles.section}>
    <div className={styles.imgWrapper}>
      <picture>
  <source srcSet={imgBig} media="(min-width:768px)"/>
  <img src={imgSmall} className={styles.img} alt="Ukraine map"/>
</picture>
    </div>

    <p>Потягом цього навчального року відбулося декілька змін у структурі нашого факультету. Найперше, ділимося приємною новиною про переобрання нашого Ярослава Притули до Сенату УКУ - колегіального органу управління та контролю Університету, який визначає основні засади і напрями його розвитку та приймає рішення з найважливіших питань його діяльності. З червня 2021 р. Олексій Молчановський став заступником декана APPS UCU з інновацій. На новоствореній посаді Олексій буде розвивати та підтримувати дух інновацій на факультеті, інтегровувати успішні освітні практики у сталі програми факультету, аналізувати ринок праці, розширювати мережу партнерств, а також залучатись до впровадження трансферу технологій. Маємо також зміни на наших бакалаврських програмах та магістерській програмі з Data Science - Руслан Парцей, працівник ML Lab UCU та випускник програми з DS тепер також допомагатиме координувати нашу магістерську програму; Андрій Гриниха, окрім комунікаційного напрямку на факультеті тепер також координуватиме програму з CS, а Галина Кирилейза з BA. Христина Якимець підтримуватиме роботу деканату факультету та, зокрема, розвиватиме напрямок співпраці з нашими APPS UCU Alumni.
</p>
  </section>
  </Container>
  <Footer/>
  </>
)

export default StructureChangesPage;