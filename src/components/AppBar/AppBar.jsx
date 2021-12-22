import facultyLogoSvg from '../../imgs/faculty_logo.svg';
import menuSvg from '../../imgs/menu.svg';
import { Link } from 'react-router-dom';
import Container from '../Container';
import styles from './AppBar.module.css'

const AppBar = ({name}) => {
  return (
    
       <div className={styles.appBar}>
          <Link className={styles.logo}  to='/'><img className={styles.logo} src={facultyLogoSvg} width="50" height="50" alt="logo"/></Link>
      
      <div className={styles.nameGroup}>
       <span className={styles.mainName}>Звіт 2020-2021</span>
       <span className={styles.name}>{name}</span>
      </div>
      <button type="button" className={styles.button}>
        <img className={styles.menu} src={menuSvg} width="30" height="30" alt="menu"/>
      </button>
    </div> 
    
  
  )
}

export default AppBar;