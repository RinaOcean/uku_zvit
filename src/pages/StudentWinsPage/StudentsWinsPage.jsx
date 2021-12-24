import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';


import img1 from '../../imgs/studWins/stud-wins-01.jpg';
import img2 from '../../imgs/studWins/stud-wins-02.jpg';
import img3 from '../../imgs/studWins/stud-wins-03.jpg';
import img4 from '../../imgs/studWins/stud-wins-04.jpg';
import img5 from '../../imgs/studWins/stud-wins-05.jpg';
import img6 from '../../imgs/studWins/stud-wins-06.jpg';
import img7 from '../../imgs/studWins/stud-wins-07.jpg';
import img8 from '../../imgs/studWins/stud-wins-08.jpg';
import img9 from '../../imgs/studWins/stud-wins-09.jpg';
import img10 from '../../imgs/studWins/stud-wins-10.jpg';
import img11 from '../../imgs/studWins/stud-wins-11.jpg';
import img12 from '../../imgs/studWins/stud-wins-12.jpg';
import img13 from '../../imgs/studWins/stud-wins-13.jpg';

import styles from './StudentsWinsPage.module.css';

const StudentsWinsPage = () => (
 <>
  <AppBar name="Студентські перемоги"/>
  <Container>
  <section className={styles.section}>
    <a href="https://www.facebook.com/csatucu/posts/2606283662998722" className={styles.imgWrapper}>
      <img src={img12} alt="girl"/>
      <p className={styles.description}>
        За результатами цьогорічних змагань“International Mathematics Competition 
        for University Students” команда факультету виборола 1 золоту, 
        1 срібну та 2 бронзових медалей, в цілому отримавши 91.33 залікових балів 
        у загальному командному рейтингу. 
        <p>Володимир Фединяк - золота медаль<br/>
          Максим Процик - срібна медаль<br/>
          Ярослав Романус, Гліб Солоджук - бронзові медалі
      </p>
      </p>
    </a>

    <div className={styles.imgWrapper}>
      <img src={img2} alt="students"/>
      <p className={styles.description}>
       На цьогорічній Міжнародній математичній олімпіаді серед школярів старших 
       класів команда України посіла 6 місце серед 107 країн світу.У складі нашої 
       збірної був також Захар Наумець - зараз першокурсник бакалаврської програми 
       “ІТ та бізнес-аналітика” APPS UCU, який посів 3 абсолютне місце з понад 600 
       учасників. 
      </p>
    </div>

    <div className={styles.imgWrapper}>
      <img src={img5} alt="ladder"/>
      <p className={styles.description}>
       Першокурсник APPS UCU Кузьма Володимир цього літа виборов бронзову медаль у 
       складі команди України на Міжнародній олімпіаді з фізики (IPHO, Lithuania - 2021) 
      </p>
    </div>

    <a href="https://tvoemisto.tv/news/shestero_studentiv_lvivskyh_vyshiv_yaki_naykrashche_sklaly_zno_otrymayut_po_100_tysyach_gryven_124614.html?fbclid=IwAR0ekhNaE4ckoFHvUliUJMafICqZJBUgdfBynH16nrdJEnoGQayVIQaPHO0" className={styles.imgWrapper}>
      <img src={img11} alt="girl"/>
      <p className={styles.description}>
       Софія Книшоїд, Володимир Кузьма, Святослав Лушней та Матвій Притула, які 
       цьогоріч вступили до нашого Університету,  отримали премії від Верховної Ради 
       України. Наші студенти були серед тих 35 абітурієнтів, які отримали найвищі бали 
       за результатами ЗНО.
      </p>
    </a>

    <a href="https://ucu.edu.ua/news/zavzhdy-pyshu-na-odnomu-podyhu-peremozhnytsya-pysmennytskogo-konkursu-oleksandra-stasyuk/?fbclid=IwAR1xMODsGCaJF0EmBB6exI4cqgtQVfPtGbFDmn-sP3sw1PDP_2ECKMVDrPo" className={styles.imgWrapper}>
      <img src={img4} alt="students"/>
      <p className={styles.description}>
       У жовтні 2020 року студентка програми “Комп’ютерні науки” Ольга Стасюк стала 
       переможницею письменницького конкурсу, який організовувала ГО «Культурна \
       ініціатива “Букмоль”». Оля перемогла у номінації #teenwrite.  Вірші студентка 
       пише з дванадцяти років, а прозові твори – почала з десяти.
     </p>
    </a>

    <a href="https://www.facebook.com/csatucu/posts/2532258100401279" className={styles.imgWrapper}>
      <img src={img3} alt="students"/>
      <p className={styles.description}>
        Студентки 3 курсу Діана Гром’як, Анна Корабльова та Наталя Романишин активно 
        працюють над створенням медичної кнопки - приладу, який має допомогти пораненим 
        солдатам швидко викликати медичну службу для отримання невідкладної допомоги.
        Зеновій Попенюк та Євгеній Молодцов - минулого року студенти 4 курсу, а сьогодні 
        вже випусники факультету працювали над програмою, що має адаптувати 
        користування комп’ютерною клавіатурою для й з дитячим церебральним паралічем. 
        Обидва прототипи були представлені на міжнародній конференції.
     </p>
    </a>

    <a href="https://www.facebook.com/csatucu/posts/2434058690221221" className={styles.imgWrapper}>
      <img src={img13} alt="gstudents"/>
      <p className={styles.description}>
        На міжнародних змаганнях для винахідників студент APPS UCU Богдан Магомета 
        представив свій проект” Face detection and recognition system development for 
        the visually impaired". Мета цієї роботи - створити пристрій, призначений для 
        використання незрячими людьми, що може допомогти ідентифікувати співрозмовників 
        його користувача за допомогою алгоритмів комп'ютерного зору. Студентка Дар’я 
        Мінєєва працювала над розробкою веб-додатку для планування фізичної реабілітації 
        хворих, що перенесли серцево-судинні захворювання та покращення комунікації 
        між лікарем та пацієнтом після виписки з лікарні. 
     </p>
    </a>

    <a href="https://www.facebook.com/csatucu/posts/2413432898950467" className={styles.imgWrapper}>
      <img src={img1} alt="girl"/>
      <p className={styles.description}>
        Студентка APPS UCU Соломія Леньо виступила з доповіддю «Квантово-топологічний 
        аналіз даних із фондової біржі” на конкурсі для молодих вчених. За результатами 
        конкурсу Соломія Леньо отримала відзнаку від осередку Українського фізичного 
        товариства в Інституті фізики конденсованих систем НАНУ.
      </p>
    </a>

    <a href="https://www.facebook.com/csatucu/posts/2630513120575776" className={styles.imgWrapper}>
      <img src={img6} alt="girl"/>
      <p className={styles.description}>
        На базі компанії  InterLogic Ukraine та за підтримки ЛМР відбувся хакатон для 
        студентів ІТ-спеціальностей. Найкращим проектом став телеграм-бот для пошуку 
        втрачених тварин від Duo Formaggi, над яким працювали наші другокурсниці Оля 
        Люба та Вікторія Рой. Найкраща презентація проекту - мобільний додаток для 
        створення кастомних екскурсій Львовом від OverLogic - до збірної команди від 
        різних університетів входили теж наші другокурсники - Малик Стефан, Василевич 
        Владислав і Тарас Свистун
      </p>
    </a>

    <a href="https://apps.ucu.edu.ua/home/business_challenge_2021/" className={styles.imgWrapper}>
      <img src={img10} alt="girl"/>
      <p className={styles.description}>
        На цьогорічному Business Tech Challenge для компанії Fishka учасники хакатону 
        мали запропонувати рішення щодо проблеми утримання клієнта в додатку Fishka. 
        Команда “Асиметричний лідер” - Юрій Лучка Роксоляна Онишків (APPS.UCU) здобули 
        перемогу в хакатоні, напрацювававши найвдалішу пропозицію для компанії та 
        отримали грошовий приз у розмірі 30 тис. грн.
      </p>
    </a>

    <a href="https://www.facebook.com/csatucu/posts/2535369146756841" className={styles.imgWrapper}>
      <img src={img8} alt="girl"/>
      <p className={styles.description}>
        Минулого року наші студенти Тимофій Козак та Дар'я Шабацька організовували 
        онлайн-хакатон, присвячений темам, що здатні змінити освіту в Україні. 
        Переможцем HUCUTHON з призом у 10 000 гривень став Кирило Стрельбицький 
       (сьогодні першокурсник APPS UCU) з проектом DeskBoard. Цей додаток реалізований 
       за допомогою комп’ютерного зору та дозволяє вести трансляцію рукописного 
       матеріалу у відеоконференції.
      </p>
    </a>

    <div className={styles.imgWrapper}>
      <img src={img9} alt="girl"/>
    </div>

    <div className={styles.imgWrapper}>
      <img src={img7} alt="iwis"/>
    </div>

      </section>
</Container>
  
 </>
)

export default StudentsWinsPage;