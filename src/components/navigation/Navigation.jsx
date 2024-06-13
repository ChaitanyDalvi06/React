import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

function Navigation() {
    return (
        <>
            <header className={styles.header}>

                <div className={styles.logo}>ITM</div>
                <div className={styles.nav}>

                    <ul className={styles.navlinks} type='none'>
                        <li>
                                <Link to="/home">Home</Link>
                        </li>
                        <li>
                                <Link to="/about">About</Link>
                        </li>
                        <li>
                                <Link to="/services">Services</Link>
                        </li>


                    </ul>


                </div>

            </header>

        </>
    )
}

export default Navigation