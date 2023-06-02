import React from 'react'
import styles from './LK.module.css'
import { UserContext, UserDispatchContext } from '../../store/UserContext'
import { useContext } from 'react'

const LK = () => {
    const user = useContext(UserContext)
  return (
    <div className= {styles.main}>
        <div className= {styles.table}>
            <div className={styles.photoBlock}>
                <div className={styles.photo}></div>
                <a className= {styles.userName}>Александра Валерьевна</a>
            </div>
            <div className= {styles.infoBlock}>
                <div className= {styles.IBText}>Имя пользователя: Александра Валерьевна</div>
                <div className= {styles.IBText}>Должность: Администратор</div>
                <div className= {styles.IBText}>Стаж: 5 лет</div>
            </div>
        </div>
    </div>
  )
}

export default LK