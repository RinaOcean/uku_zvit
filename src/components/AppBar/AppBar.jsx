import facultyLogoSvg from '../../imgs/faculty_logo.svg';
import menuSvg from '../../imgs/menu.svg';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react';

import styles from './AppBar.module.css'

const AppBar = ({name}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div className={styles.appBar}>
      <Link className={styles.logo}  to='/'>
        <img className={styles.logo} src={facultyLogoSvg} width="50" height="50" alt="logo"/>
      </Link>
      
      <div className={styles.nameGroup}>
       <span className={styles.mainName}>Звіт 2020-2021</span>
       <span className={styles.name}>{name}</span>
      </div>

      <button type="button" className={styles.button} onClick={handleShow}>
        <img className={styles.menu} src={menuSvg} width="30" height="30" alt="menu"/>
      </button>

      <Offcanvas show={show} onHide={handleClose}  placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className={styles.itemsWrapper}>
          <Link onClick={scrollToTop} className={styles.item} to='/introductory-campaign-results'>Результати вступної кампанії</Link>
          <Link onClick={scrollToTop} className={styles.item} to='/strategy-goals'>Стратегічні цілі факультету 2025</Link>
          <Link onClick={scrollToTop} className={styles.item} to='/structure-changes'>Структурні зміни</Link>
          <Link onClick={scrollToTop} className={styles.item} to='/students-wins'>Стдентські перемоги</Link>
          <Link onClick={scrollToTop} className={styles.item} to='/professors-wins'>Успіхи викладачів</Link>
          <Link onClick={scrollToTop} className={styles.item} to='/social-projects'>Суспільно-орієнтовані проекти</Link>
          <Link onClick={scrollToTop} className={styles.item} to='/certificate-programs'>Сертифікаційні програми</Link>
          <Link onClick={scrollToTop} className={styles.item} to='/events'>Події на факультеті</Link>
          <Link onClick={scrollToTop} className={styles.item} to='/science'>Наука</Link>
          <Link onClick={scrollToTop} className={styles.item} to='/other'>Інше</Link>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
      


    </div> 
    
  
  )
}

export default AppBar;