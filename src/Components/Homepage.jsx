import React from 'react'
import { Link } from 'react-router-dom'
import style from"./homepage.module.css"


const Homepage = () => {
  return(
    <section id={style.nav}>
        <Link to="/">Create-user</Link>
        <Link to="/users">Users</Link>
      
    </section>
  )
}

export default Homepage
