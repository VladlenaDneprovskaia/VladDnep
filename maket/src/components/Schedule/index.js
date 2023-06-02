import React, { useState } from 'react'
import List from '../List'
import styles from './Schedule.module.css'

const Schedule = () => {

  const parent = 'Расписание занятий'

  const [items, setItem] = useState(
    [
      {id: '1', choreography: 'Hip-Hop', name: 'Гончаров Алексей', classroom: '1', time: '17:30'},
      {id: '2', choreography: 'Современная хореография', name: 'Мальцева Ангелина', classroom: '3', time: '17:00'},
      {id: '3', choreography: 'k-pop хореография', name: 'Назарова Валентина', classroom: '3', time: '18:30'},
    ]
  )

  const [element, setElement] = useState({id: '', choreography: '', name: '', classroom: '', time: ''})

  const [active, setActive] = useState(false)
  const [delActive, setDelActive] = useState(false)

  const removeItem = (item) => {
    setItem(items.filter(p => p.id !== item.id))
  }

  const createItem = (newItem) => {
    setItem([...items, newItem])
  }

  const addNewItem = (e) => {
    e.preventDefault()
    const newItem = {
      ...element, id: Date.now()
    }
    createItem(newItem)
    setElement({id: '', choreography: '', name: '', classroom: '', time: ''})
    setActive(false)
  }
  const headTable = ['Хореография', 'ФИО хореографа', 'Зал', 'Время']


  return (
    <div className= {styles.main}>
      <div className= {styles.buttonBlock}>
        <button onClick={() => setActive(true)} className= {styles.bbButton}>Добавить запись</button>
        {!delActive&&<button onClick= {() => setDelActive(true)} className= {styles.bbButton}>Удалить запись</button>}
        {delActive&&<button onClick= {() => setDelActive(false)} className= {styles.bbButton}>Завершить удаление</button>}
        
      </div>
      <div className= {styles.table}>
        <List parent = {parent} items = {items} removeItem = {removeItem} delActive = {delActive} setDelActive = {setDelActive} headTable = {headTable}/>
        {active&&
          <form className= {styles.post}>
          <div className= {styles.postRow}>
            <div className= {styles.postText}>
              Выбрать хореографию:
            </div>
            <input 
            value= {element.choreography}
            onChange={e => setElement({...element, choreography: e.target.value})}
            />
          </div>
          <div className= {styles.postRow}>
            <div className= {styles.postText}>
              Выбрать хореографа:
            </div>
            <input 
            value= {element.name}
            onChange={e => setElement({...element, name: e.target.value})}
            />
          </div>
          <div className= {styles.postRow}>
            <div className= {styles.postText}>
              Выбрать зал:
            </div>
            <input 
            value= {element.classroom}
            onChange={e => setElement({...element, classroom: e.target.value})}
            />
          </div>
          <div className= {styles.postRow}>
            <div className= {styles.postText}>
              Указать время:
            </div>
            <input 
            value= {element.time}
            onChange={e => setElement({...element, time: e.target.value})}
            />
          </div>
          <button className= {styles.bbButton} onClick={addNewItem}>Добавить</button>
          <button className= {styles.closeBtn} onClick={() => setActive(false)}></button>
          </form>
          
        }
        
      </div>
      
    </div>
  )
}

export default Schedule