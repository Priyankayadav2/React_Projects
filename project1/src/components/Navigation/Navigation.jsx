import styles from './Navigation.module.css';
const Navigation = () => {
return (
    <nav className={`${styles.navigation} containner`}>
        <div className={styles.logo}>
            <img src="/images/logo_contact.png" alt="contactUs" style={{ width: "110px", height: "70px" }} />
        </div>
        <ul>
        <li>Home</li>
        <li>About</li> 
        <li>Contact Us</li>
        </ul>
    </nav>
)
}
export default Navigation;