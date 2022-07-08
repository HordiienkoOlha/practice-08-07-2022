import { NavLink, Outlet } from "react-router-dom";
import styles from './Header.module.css'

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul className={styles.list}>
                        <li>
                            <NavLink 
                                exact="true"
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? styles['active-link'] : styles.link}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/add"
                                className={({ isActive }) =>
                                    isActive ? styles['active-link'] : styles.link}>Add contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}