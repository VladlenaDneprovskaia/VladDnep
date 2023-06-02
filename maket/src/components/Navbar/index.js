import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import { UserContext, UserDispatchContext } from '../../store/UserContext'

export default function Navbar() {
  const dispatch = useContext(UserDispatchContext)
  const user = useContext(UserContext)
  function handleLogout() {
    dispatch({
      type: 'logout'
    })
  }
  return (
    <div className={styles.navPanel}>
      <div className={styles.photoBlock}>
        <div className={styles.photo}></div>
        <a className= {styles.userName}>Александра Валерьевна</a>
      </div>
      <div className= {styles.contentBlock}>
        <a className = {styles.navLink} href='/schedule'>Расписание занятий</a>
        <a className = {styles.navLink} href='/choreographer'>Список хореографов</a>
        <a className = {styles.navLink} href='/student'>Список учеников</a>
        <a className = {styles.navLink} href='/lk'>Личный кабинет администратора</a>
      </div>
      <div className= {styles.LogBlock}>
      {!user
        ?
        <a className = {styles.LogItem} href='/login'>Вход</a>
        : <> 
          <a className = {styles.LogItem} href='/login' onClick={() => handleLogout() }>Выход</a>
        </>
      }
      </div>
    </div>
  )
}
