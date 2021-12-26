import { useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import img1 from '../../imgs/socialProjects/project-01.jpg';
import img2 from '../../imgs/socialProjects/project-02.jpg';
import img3 from '../../imgs/socialProjects/project-03.jpg';
import img4 from '../../imgs/socialProjects/project-04.jpg';
import img5 from '../../imgs/socialProjects/project-05.jpg';
import img6 from '../../imgs/socialProjects/project-06.jpg';
import arrowSvg from '../../imgs/socialProjects/down-arrow-svgrepo.svg';

import styles from './SocialProjectsPage.module.css'



const SocialProjectsPage = () => {
  const [open1, setOpen1]= useState(false);
  const [open2, setOpen2]= useState(false);
  const [open3, setOpen3]= useState(false);
  const [open4, setOpen4]= useState(false);
  const [open5, setOpen5]= useState(false);
  const [open6, setOpen6]= useState(false);

  return(
  <>
   <AppBar name="Суспільно-орієнтовані проекти"/>
   <Container>
     <section className={styles.section}>
        <div className={styles.imgWrapper}>
       <img src={img1} alt="man talking"/>
       
      {open1? 
      <p className={styles.description}>
         Розвиток сфери штучного інтелекту вже зовсім скоро може стати 
       одним із пріоритетів розвитку міста Львова. У червні 2021 р. 
       Комісія підприємництва, інвестицій, цифрової трансформації та 
       спадщини одноголосно підтримала Концепцію розвитку штучного 
       інтелекту у м.Львові ініційовану Олексієм Молчановським. 
         Концепція розвитку сфери штучного інтелекту у Львові спирається 
       на міську стратегію «Львів — місто гідного життя». Її пропонують 
       розвивати в трьох сферах: економіки, освіти та міського управління. 
         Автори концепції планують розпочати діалог з ІТ компаніями, щоби 
       забезпечити доступність штучного інтелекту для місцевого бізнесу 
       та створити платформу для діалогу ІТ компаній з підприємцями.
       Бізнес потрібно інформувати про те, як штучний інтелект може 
       підвищити ефективність роботи, для цього залучати експертів і 
       міжнародний досвід. 

         В освітній сфері для впровадження Концепції планують організувати 
       курси підвищення кваліфікації для педагогів, в першу чергу вчителів 
       інформатики в школах, та зміни навчальних програм, курси цифрової 
       грамотності для школярів. Для вищої освіти планують забезпечити 
       стажування для викладачів ІТ-напрямів в ІТ-компаніях, створити 
       комунікаційний майданчик між практиками і викладачами, розробити 
       курси зі штучного інтелекту для спеціальностей з-поза ІТ-напрямку 
       та створити PhD програму зі штучного інтелекту. 

        На рівні міської інфраструктури штучний інтелект може застосовуватися 
       для аналізу транспортних потоків, завантаженості доріг та парковок, в 
       електронному самоврядуванні, для підвищення безпеки в місті тощо.&nbsp;
       <a className={styles.link} href="https://lviv.goloszmin.org/news/lviv-mozhe-stati-tsentrom-shtuchnogo-intelektu-skhidnoi-evropi-oleksa-voznyak?fbclid=IwAR0ZlYmKPHVn5OkWXyKuB3NPkJBNnQZA9npcDns7-N-bRz8aB2n84RJqDWc">Детальніше</a>
       </p> : null
       }

       <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen1(!open1)}}>
       {open1? 
       <span class="material-icons">
         keyboard_double_arrow_up
       </span> :
       <span class="material-icons">
         keyboard_double_arrow_down
       </span>
       }
       </button>
       
     </div>
        <div className={styles.imgWrapper}>
       <img src={img2} alt="classroom"/>
             
       {open2? <p className={styles.description}>
         Уже четвертий рік поспіль студенти факультету прикладних наук УКУ 
         самостійно організовують “APPS Summer Camp” – літню школу, яка має 
         на меті дати орієнтири для молодих людей у сфері комп’ютерних наук,
         які  у майбутньому прагнуть будувати свою кар’єру в ІТ галузі. 
         Студенти не тільки керують усіма організаційними процесами,  але й 
         самостійно викладають навчальні курси для учасників школи.
         Під час навчання на “APPS Summer Camp” учасники мають можливість 
         прослухати курси з  Принципу Організації Комп’ютера, Аналітики даних, 
         Дизайн мислення, Основ програмування у Python, Візуалізації даних, 
         Робототехніки, Основ економіки. Навчальна програма також наповнена 
         низкою інтерактивних занять, де учні вчаться розвивати ефективну 
         комунікацію, вправляються в інтелектуальних змаганнях “Що?Де?Коли?”, 
         а також мають зустрічі та спілкування з експертами з ІТ індустрії. 
         Фінальним акордом у програмі літньої школи  є презентація власного 
         дослідницького проекту, який реалізовується протягом навчання на таборі. 
         Для того, щоб учасники почувалися більш впевнено під час своїх презентацій, 
         організатори також проводять воркшопи з мистецтва публічних виступів.&nbsp; 

       <a className={styles.link} href="https://lviv.goloszmin.org/news/lviv-mozhe-stati-tsentrom-shtuchnogo-intelektu-skhidnoi-evropi-oleksa-voznyak?fbclid=IwAR0ZlYmKPHVn5OkWXyKuB3NPkJBNnQZA9npcDns7-N-bRz8aB2n84RJqDWc">Детальніше</a>
       </p> : null
       }

       <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen2(!open2)}}>
       {open2? 
       <span class="material-icons">
         keyboard_double_arrow_up
       </span> :
       <span class="material-icons">
         keyboard_double_arrow_down
       </span>
       }
       </button>
                     
     </div>
        <div className={styles.imgWrapper}>
       <img src={img3} alt="girl"/>
       {open3? 
       <p className={styles.description}>
         Команда Студентського братства УКУ вже 9 рік поспіль ініціює проєкт 
         «Великдень разом». Цьогоріч захід відбувся у Херсоні з 30 квітня по 
         3 травня, де згуртував  молодь із Західної і Східної України для 
         реалізації спільних соціальних проєктів, волонтерський ініціатив та 
         святкування Воскресіння Христового. 
         «Проєкт “Великдень разом” став своєрідним продовженням студентської 
         ініціативи “Різдво разом”. Саме  слово “разом” вказує на спільність, 
         єдність і співпрацю. Тому багато років, студенти створюють у різних 
         куточках нашої країни можливості для зустрічі, спільного проведення 
         часу з місцевою громадою, руйнування стереотипів та упереджень один 
         до одного, а об’єднує усіх найбільше християнське свято – Христове 
         Воскресіння». Головною організаторкою цьогорічної ініціативи була 
         студентка факультету прикладних наук Софія Гаркот.&nbsp;
         <a className={styles.link}  href="https://ucu.edu.ua/news/velykden-razom-u-hersoni-vid-studentskogo-bratstva-uku/?fbclid=IwAR14ZzVFkW8AmFLknVLlPdhOhUbH_Ft4x7oYbXC84S1LsPMh4yrWx-pck58">Детальніше</a>
        </p>: null
       }

        <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen3(!open3)}}>
        {open3? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
       
      </div>
        <div className={styles.imgWrapper}>
       <img src={img4} alt="graphic"/>
       {open4?
       <p className={styles.description}>
         З початку 2020 року Факультет прикладних наук УКУ почав досліджувати 
         ринок вакансій в Україні на позиції, які пов’язані з Data Science. 
         На основі цих досліджень ми що пів року публікуємо звіт з основними 
         інсайтами. Для того, щоб виявляти тенденції в галузі Data Science у 
         великих містах України (Київ, Львів, Харків, Одеса, Дніпро), ми 
         проводимо динамічне дослідження-аналіз вакансій на сайтах dou.ua 
         та djinni.co. Також ми вирішили оцінити відношення кількості вакансій 
         у сфері Data Science до загальної кількості вакансій в IT.
         З детальними результатами досілдження можна ознайомитися за&nbsp;
         <a className={styles.link}  href="https://apps.ucu.edu.ua/articles-and-research/data-science-job-market-2021-1/">покликанням</a>. 
        </p>: null
       }

        <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen4(!open4)}}>
        {open4? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
       
     </div>
        <div className={styles.imgWrapper}>
       <img src={img5} alt="graphic"/>
       {open5?
       <p className={styles.description}>
         У кінці 2020 р. Дмитро Лопушанський, студент факультету прикладних наук 
         УКУ отримав патент на мультифункціональний пристрій для незрячих людей. 
         Прилад HelpyEyes, над яким Дмитро працює вже два роки може виконувати 
         3 функції: визначати колір, вимірювати рівень освітленості та попереджати 
         про перешкоди поблизу.  Розробка має допомогти людям з серйозними зоровими 
         порушеннями вирішити деякі з проблем, з якими стикаються щодня. Сам прилад 
         є достатньо компактним, за розмірами його можна порівняти з кишеньковим 
         ліхтариком.
         Дмитро готував свою ідею для Малої академії наук України, завдяки якій 
         потрапив на міжнародні конкурси. Дослідник уже представляв свій проект 
         на ICYS (Міжнародна конференція молодих вчених) у Куала-Лумпурі в Малайзії, 
         на OKSEF (Виставка-конкурс у сфері технічних наук та енергетики) в м. Ізмір, 
         Туреччина та на AIGC (Глобальний конкурс інновацій) у Сінгапурі.
         Ознайомитися з публічною частиною патенту можна на сайті Укрпатенту за&nbsp; 
         <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fsis.ukrpatent.org%2Fuk%2Fsearch%2Fdetail%2F1465328%2F%3Ffbclid%3DIwAR0P9ZnO5DJhWstDRQ-GWIgHxYRaM8EWQ76w1Vs9CnJMzSHgLzefoBVQoQQ&h=AT3p5clRB0Z5swMRlJg9p1R5JL9z8eeInn2QhZ9RN99SPgj422ZEcgZ6BzU4QT_CZa3fkZFnVcph0AeIdBWeKxVekCcUW_nSeSHzwtXPVv93xwAz8hNJ2dz81d9ok1YyMpl2&__tn__=-UK-R&c%5B0%5D=AT0oE0IcNz7JemGrHlmGT4g1OJ7Ot6jz9YxErBcWe62odztO-SuYPrf-xe20_a2YuxLklvoQU9va-kJsuZnS7423vHWKs-1lWh5Snh4vRuicLXhzreaBn7m3YhbSmPcOthnaGi4rw2Ktd_gp1BTVhS2BQj3EeZ7qNTqNtGhqp7WjLRKOJ70OeI21gPfy7U2Ww-bykbHM">покликанням</a>.&nbsp;
         
        <a className={styles.link}  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fucu.edu.ua%2Fnews%2Fstudent-pershokursnyk-uku-rozrobyv-prylad-dlya-nezryachyh%2F%3Ffbclid%3DIwAR0P9ZnO5DJhWstDRQ-GWIgHxYRaM8EWQ76w1Vs9CnJMzSHgLzefoBVQoQQ&h=AT1JfSoyz8gxb9yLeLEsbetTMd56UqrDtggr0FVOPW8hd_4aTMv3bp3bL34w_l7xmVAcEf9e54tl8H0ePLrEiH2wZPUAcn_x7Dvpbz9KIZTZT9-ZNPIcdcANE6vJnefk7COb&__tn__=-UK-R&c%5B0%5D=AT0oE0IcNz7JemGrHlmGT4g1OJ7Ot6jz9YxErBcWe62odztO-SuYPrf-xe20_a2YuxLklvoQU9va-kJsuZnS7423vHWKs-1lWh5Snh4vRuicLXhzreaBn7m3YhbSmPcOthnaGi4rw2Ktd_gp1BTVhS2BQj3EeZ7qNTqNtGhqp7WjLRKOJ70OeI21gPfy7U2Ww-bykbHM">Детальніше</a>
        </p>: null
       }

        <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen5(!open5)}}>
        {open5? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
     </div>
        <div className={styles.imgWrapper}>
       <img src={img6} alt="student"/>
       {open6?
       <p className={styles.description}>
         Уже другий рік поспіль факультет прикладних наук УКУ разом з 
         великим українським бізнесом проводить Business Tech Challenge.
         Business Tech Challenge – це можливість отримати прикладні знання 
         у розробці нових продуктів; впровадити інноваційну ідею вирішення 
         проблеми реального бізнесу; отримати унікальний досвід співпраці з 
         провідними спеціалістами компанії та викладачами APPS UCU та 
         позмагатися разом з своєю командою за Приз від компанії.
         Цьогоріч учасники хакатону працювали над розв’язком дилеми компанії 
         Fishka щодо того як задовольнити щоденні потреби клієнта через мобільний 
         додаток, щоб діяти в межах наявної бізнес моделі та балансу взаємної 
         вигоди. Переможцями хакатону стала команда студентів факультету 
         прикладних наук УКУ - Юрій Лучка та Роксоляна Онишків, які отримали 
         перемогу та приз 30 000 грн.
         Модель Business Tech Challenge є виграшною для кожної із сторін, 
         адже успішний бізнес пропонує свою проблему на вирішення учасникам, 
         найкращі рішення яких мають можливість бути реалізованими в реальному житті.
        </p>: null
       }

       <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen6(!open6)}}>
        {open6? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
       
     </div>
      </section>
    </Container>
   
  </>
 )
}
 
 export default SocialProjectsPage;