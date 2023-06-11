import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={rocketLogo} alt="Logotipo do Ignite" />
                <strong>to<span>do</span></strong>
            </header>
        </>
    );
}