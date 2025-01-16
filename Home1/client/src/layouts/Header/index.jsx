import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./index.module.scss"

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
      <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
          <li>
            <NavLink to="/Favorites">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/basket">Basket</NavLink>
          </li>
        </ul>
      </nav>
      </div>
      </div>
    </header>
  )
}

export default Header
