import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import { useState } from 'react';

import styles from './SciencePage.module.css';

import img1 from '../../imgs/science/science_01.jpg';
import img2 from '../../imgs/science/science_02.jpg';
import img3 from '../../imgs/science/science_03.jpg';
import img4 from '../../imgs/science/science_04.jpg';
import img5 from '../../imgs/science/science_05.jpg';
import img6 from '../../imgs/science/science_06.jpg';
import img7 from '../../imgs/science/science_07.jpg';

const SciencePage = ()=>{
  const [open1, setOpen1]= useState(false);
  const [open2, setOpen2]= useState(false);
  const [open3, setOpen3]= useState(false);
  const [open4, setOpen4]= useState(false);
  const [open5, setOpen5]= useState(false);
  const [open6, setOpen6]= useState(false);
  const [open7, setOpen7]= useState(false);

  return(
  <>
    <AppBar name="Наука"/>
    <Container>
   <section className={styles.section}>
   <div className={styles.wrapper}>
     <div className={styles.imgWrapper}>
      <img src={img1} alt="map"/>
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
      {open1? 
      <p className={styles.description}>
        У листопаді 2021 р. відбулося представлення спільного проекту <a className={styles.link} href="https://humaniora.ucu.edu.ua/">Гуманітарного 
        факультету</a> та факультету прикладних наук УКУ у сфері інтерактивної картографії, 
        на прикладі назв вулиць у давньому Львові. Ця ініціатива стала можливою завдяки 
        співпраці аспірантки кафедри історії УКУ Орисі Віри та студента 2 курсу програми 
        “ІТ та Бізнес-аналітика” Гліба Солоджука, який працював над створенням сайту, 
        який містить кілька шарів (сучасну підоснову, мапу 18 ст. та шари з назвами вулиць), 
        а також допомагав візуалізувати ці шари.
        Автори планують постійно доповнювати сайт іншими шарами, тож даний проект і співпраця 
        двох факультетів буде продовжуватися. З результатами дослідження, а також з 
        інтерактивною картою можна ознайомитися на <a className={styles.link} href="https://humaniora.ucu.edu.ua/.../interaktyvna.../">сайті</a>.
      </p> : null
      }

    </div>

    <div className={styles.wrapper}>
    <div className={styles.imgWrapper}>
    <img src={img2} alt="iccv"/>
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
      {open2? 
      <p className={styles.description}>
        У жовтні 2021 р. Лабораторія машинного навчання УКУ разом із RnD відділом 
        SoftServe представляли результати своїх спільних досліджень на міжнародній 
        конференції <a className={styles.link} href="https://www.facebook.com/hashtag/iccv2021?__eep__=6&__cft__%5b0%5d=AZUbzidkluLMl7jnqqoftn0Y_cvv_z4tchbyixZiQujt8NVv4yefZSXT2gFXWZ0krLh1uCAcrnTTlX1oM5RN-tQHSQYWnGFakrHI0LpXRP5BIuCv3a4mpT17C1RtQyp-WNL6cctlIM0WHIoQChj6qkK10H6eJRKL8LgvgF7eNoz0mufklEep1AV4UW3vHWmrj0E&__tn__=*NK-R">#ICCV2021</a>, присвяченій дослідженням у сфері комп’ютерного зору.
        Тарас Румежак, працівник ML Lab UCU представив дослідження <a className={styles.link} href="https://cutt.ly/GRipFWm">"Towards realistic 
        symmetry-based completion of previously unseen point clouds"</a> на воркшопі конференції,
        а саме дослідження є результатом співпраці ML Lab UCU (О.Добосевич, Р.Гринів) і 
        компанії SoftServe (В.Селоткін, В.Карпів, М.Максименко).
        На головній частині конференції ICCV2021 своє дослідження <a className={styles.link} href="https://cutt.ly/QRioUnZ">”BabelCalib: A Universal Approach to Calibrating Central Cameras”</a> також 
        представили Ярослава Лочман і Костя Лєпешов у співпраці з Jianhui Chen, Michal Perdoch, Christopher Zach, James Pritts.&nbsp;
        <a className={styles.link} href="https://www.facebook.com/csatucu/posts/2650839701876451">Детальніше</a>
      </p> : null
      }

    </div>


    <div className={styles.wrapper}>
    <div className={styles.imgWrapper}>
    <img src={img3} alt="IEEE CSIT 2021"/>
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
      {open3? 
      <p className={styles.description}>
        На початку осені дві студентські команди факультету взяли участь у щорічній міжнародній 
        конференції <a className={styles.link} href="http://csit.ieee.org.ua/">Computer Science and Informational Technologies Conference (IEEE CSIT 2021)</a> 
        у секції, що стосується комп’ютерної інженерії.
        Обидві команди, користуючись методами аналізу експериментальних результатів з природничих наук,  
        проаналізували продуктивність двох важливих задач - індексування Інтернету і високопродуктивних 
        обчислень типу штучного інтелекту чи математичного моделювання, зокрема -- на GPU. Наукові проекти 
        були напрацьовані в рамках курсу “Архітектура комп’ютерних систем”, який викладає Олег Фаренюк,
         який також є науковим керівником обох проектів.
         Доповідь першої команди - <a className={styles.link} href="https://l.facebook.com/l.php?u=https%3A%2F%2Ffb.watch%2F8bVqiaLffw%2F%3Ffbclid%3DIwAR3TfaNSCpQ3dHnxghF8ZLkCBJ8hGpIrAHU_4IiunbohKh205y9ggpAbSLE&h=AT05GW4IKJLy55wb4d_d8F4UJ85TZOYIqY8s0DrCz188_8GK6htiCpFt3msB9SPx9HTRKkw958mPoTH1WNzx1SIRtUgwBssQY5deipwxxXQ_Y0lDfHF7oQvYkMVbbeaJ2D7i&__tn__=-UK-R&c%5b0%5d=AT3uZ0uyzXiAOMzF13jHrqYYecV78fUV41J5g355B5-YpzaYmebGl0zcXyOSTXctLoVSK4pB_TRJTx1zZ-kTlWyKTdTa-uygA10WvDN42CGEG-1d7hN--Su-qk1DLyYF763kGy6Y8MfjFL6_XU5bDtIh4lD2i9ji0oTgY0J-q3jA-ItdVT12T3u0ynjtlUmpEFTzKUz7">"Comparison of performance of the popular approaches to implementing parallel crawlers"</a> 

         Доповідь другої команди - <a className={styles.link} href="https://www.facebook.com/CSIT.Conference/videos/574266460439882/?__cft__%5b0%5d=AZW0W8YnlCQZpmg-5YYFA3R-5IIoZcSbVbck6aeuAKEViNH1mXOjBZhIVIMmlEuASiBlHwQwV6GxvzudKbQ2iHUJcw7HOeZzDYnJIRLH7JC9-jHGCusHodAfR75FqSdakcAwJs_kZEtk8707A72I_jXiKCpCN40sCZ06Ctwr_by-PXjtKuEf_9ib2pE88_k5FPA&__tn__=-UK-R">"Productivity comparison of the popular parallel programming approaches on Computational Fluid Dynamics problem"</a>&nbsp;
        <a className={styles.link} href="https://www.facebook.com/csatucu/posts/2643938405899914">Детальніше</a>
      </p> : null
      }

    </div>
      

    <div className={styles.wrapper}>
    <div className={styles.imgWrapper}>
    <img src={img4} alt="CVPR 2021"/>
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
      {open4? 
      <p className={styles.description}>
        У червні 2021 о. декілька команд з Machine Learning Lab взяли участь у міжнародній 
        конференції з комп’ютерного бачення <a className={styles.link} href="https://cvpr2021.thecvf.com/">"Computer vision and Pattern Recognition 2021”</a>. 
        CVPR 2021 - це головна щорічна подія з комп’ютерного зору, що включає основну конференцію 
        та кілька семінарів, які відбуваються одночасно.
        Команда в складі Р. Парцей (UCU ML Lab), О.Добосевич (UCU ML Lab) та О.Максимець (Facebook AI Research)  
        виборола 2 місце у Habitat Challenge 2021 PointNav Track з підходом <a className={styles.link} href="https://eval.ai/web/challenges/challenge-page/802/leaderboard/2192?fbclid=IwAR0oT6azSlS2Sg-_qW2l_V3eUJukzKOq9g2ziyyPCIsPCfAgY4s_JN7_-d0">“Robust visual odometry for realistic Pointgoal navigation”</a>.
        Анастасія Лівочка, випускниця факультету виступила з презентацією дослідження 
        “Initialization and Transfer Learning of Stochastic Binary Networks from Real-Valued Ones”.
        Юрій Антентик, Володимир Цапів та Іван Косаревич представили розширену анотацію 
        ”Monte Carlo optimization for training binary neural networks”, що є спробою дослідити 
        метод тренування бінаризованих нейронних мереж, який міг би відбуватися на "розумному" 
        пристрої з обмеженими ресурсами.&nbsp;
        <a className={styles.link} href="https://www.facebook.com/csatucu/posts/2576546352639120">Детальніше про проекти</a>
      </p> : null
      }

    </div>

    <div className={styles.wrapper}>
    <div className={styles.imgWrapper}>
    <img src={img5} alt="NeurIPS2020"/>
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
      {open5? 
      <p className={styles.description}>
        У грудні 2020 р. випускниця та студентка APPS UCU Дзвінка Яріш та Софія Гаркот виступили на одній з найбільших 
        наукових конференцій по Машинному навчанню <a className={styles.link} href="https://nips.cc/Conferences/2020">#NeurIPS2020</a> разом із SoftServe R&D Team.
        Кожного року конференція відбувається у Ванкувері (Канада), і цьогоріч, у режимі онлайн, об’єднає тисячі 
        науковців з усього світу. На воркшопі <a className={styles.link} href="https://wimlworkshop.org/neurips2020/">WiML</a> (Women in Machine Learning) наші дослідниці представили свої наукові 
        напрацювання у сфері зв‘язності молекул та білків.
      </p> : null
      }

    </div>

    <div className={styles.wrapper}>
    <div className={styles.imgWrapper}>
    <img src={img6} alt="EACL 2021"/>
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
      {open6? 
      <p className={styles.description}>
        Факультет прикладних наук УКУ та Grammarly стали співорганізаторами конференції з 
        комп’ютерної лінгвістики <a className={styles.link} href="https://2021.eacl.org/">EACL 2021</a> у Києві. EACL 2021 - це найбільша в Європі конференція 
        з комп’ютерної лінгвістики, яка вперше відбулася в Україні. Ця подія є головним майданчиком 
        для обміну досвідом та останніми досягненнями у сфері опрацювання природної мови і є 
        наймасштабнішою подією із тих, що коли-небудь відбувалися в Україні у сегменті обробки природних мов.
        Проведення міжнародної конференції EACL є вкрай важливою подією для української спільноти фахівців з 
        комп’ютерної лінгвістики та штучного інтелекту. В Україні зараз не так багато дослідницьких груп, 
        які проводять дослідження в цій галузі саме для української мови. Зокрема, студенти магістерської 
        програми «Науки про дані» УКУ в рамках дипломних проєктів розробляли унікальні рішення для українського 
        NLP. Цілком можливо, що така масштабна подія приверне більше уваги до подібних досліджень та підвищить 
        статус і спроможність української мови в галузі комп’ютерної лінгвістики.
      </p> : null
      }

    </div>
 

    <div className={styles.wrapper}>
    <div className={styles.imgWrapper}>
    <img src={img7} alt="EACL 2021"/>
      <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen7(!open7)}}>
          {open7? 
           <span class="material-icons">
             keyboard_double_arrow_up
           </span> :
           <span class="material-icons">
             keyboard_double_arrow_down
           </span>
       }
       </button>
       </div>
      {open7? 
      <p className={styles.description}>
        Факультет прикладних наук УКУ став співорганізатором першого семінару з обробки 
        української природної мови (UNLP) в рамках міжнародної конференції <a className={styles.link} href="http://icteri.org/icteri-2021/proceedings/volume-1/">ICT in Education,
        Research, and Industrial Applications: Integration, Harmonization, and Knowledge Transfer</a> (ICTERI 2021). 
        Метою воркшопу є об’єднання провідних науковців, дослідників та практиків у галузях обробки природної 
        мови та комп’ютерної лінгвістики, які працюють з українською мовою. Він також забезпечує платформу 
        для обговорення та обміну ідеями та методами, спрямованими на розробку обчислювальних засобів для
        широкого спектру завдань обробки української природної мови.
       
      </p> : null
      }

    </div>

 </section>
   </Container>
  </>
 )
}
 
 export default SciencePage;