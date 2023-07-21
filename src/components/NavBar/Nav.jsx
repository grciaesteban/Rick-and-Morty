import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom"

export default function Nav(props){
    return(
        <div className={styles.navBar}>
            <button className={styles.favorites}>
                <NavLink to="/favorites" activeclassname="active">FAVORITES</NavLink>
            </button>
            <button onClick={props.logout} className={styles.logout}>LOGOUT</button>
            <button onClick={props.random} className={styles.random}>RANDOM</button>
            <button className={styles.about}>
                <NavLink to="/about" activeclassname="active">ABOUT</NavLink>
            </button>
            <button className={styles.home}>
                <NavLink to="/home" activeclassname="active">HOME</NavLink>
            </button>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

// props
// onSearch = function