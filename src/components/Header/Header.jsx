import styles from './Header.module.css';
import facultyLogoSvg from '../../imgs/faculty_logo.svg';
import facultyLogoPng from '../../imgs/faculty_logo.png';

const Header = ()=>{
  return (
    <header className={styles.header}>
    <div className={styles.headerLabel}>
      
      
        <img className={styles.logo} src={facultyLogoSvg} width="100" height="40" alt="logo" />
      
      <span>Звіт 2020-2021</span>
    </div>
    <div className={styles.missionWrapper}>
      <h2 className={styles.missionHeading}>Місія</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad sequi officiis veniam incidunt quo quam in dolorum laboriosam, ex maiores veritatis quae mollitia a dolor cupiditate doloremque vel qui?</p>
    </div>
  </header>
  )
}

export default Header;