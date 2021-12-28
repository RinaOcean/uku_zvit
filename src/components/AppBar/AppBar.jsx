import facultyLogoSvg from '../../imgs/faculty_logo.svg';
import menuSvg from '../../imgs/menu.svg';
import { Link, NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react';

import styles from './AppBar.module.css'

const AppBar = ({name}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if(show) {
    document.body.style.position = 'fixed';
  }else{
    document.body.style.position = '';
  }
  
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

      <Offcanvas show={show} onHide={handleClose}   placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className={styles.itemsWrapper}>
            
          <NavLink 
            onClick={scrollToTop} className={styles.item} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/introductory-campaign-results'>Результати вступної кампанії
          </NavLink>

          <NavLink
            onClick={scrollToTop} 
            className={styles.item} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})} 
            to='/strategy-goals'>Стратегічні цілі факультету 2025
          </NavLink>

          <NavLink 
            onClick={scrollToTop} 
            className={styles.item} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})} 
            to='/structure-changes'>Структурні зміни
            </NavLink>

          <NavLink 
            onClick={scrollToTop} 
            className={styles.item} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})} 
            to='/students-wins'>Студентські перемоги
          </NavLink>

          <NavLink 
            onClick={scrollToTop} 
            className={styles.item} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})} 
            to='/professors-wins'>Успіхи викладачів
          </NavLink>

          <NavLink 
            onClick={scrollToTop} 
            className={styles.item} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})} 
            to='/social-projects'>Суспільно-орієнтовані проекти
          </NavLink>

          <NavLink 
            onClick={scrollToTop} 
            className={styles.item} style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})} 
            to='/certificate-programs'>Сертифікаційні програми
          </NavLink>

          <NavLink 
            onClick={scrollToTop} 
            className={styles.item} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})} 
            to='/graduates'>Випускники
          </NavLink>

          <NavLink 
            onClick={scrollToTop} 
            className={styles.item} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})} 
            to='/science'>Наука
          </NavLink>

          
          <NavLink 
            onClick={scrollToTop} 
            className={styles.item} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})} 
            to='/ratings'>Рейтинги
          </NavLink>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
      


    </div> 
    
  
  )
}

export default AppBar;