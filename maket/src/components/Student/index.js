import React, { useState } from 'react'
import List from '../List'
import styles from '../Schedule/Schedule.module.css'

const Student = () => {

    const parent = 'Список учеников'
  
    const [items, setItem] = useState(
      [
        {id: '1', surname: 'Петров' , name: 'Иван', patronymic: 'Иванович', date: '13.06.2004'},
        {id: '2', surname: 'Петров' , name: 'Иван', patronymic: 'Иванович', date: '13.06.2004'},
        {id: '3', surname: 'Петров' , name: 'Иван', patronymic: 'Иванович', date: '13.06.2004'},
      ]
    )
  
    const [element, setElement] = useState({id: '', surname: '', name: '', patronymic: '', date: ''})
  
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
      setElement({id: '', surname: '', name: '', patronymic: '', date: ''})
      setActive(false)
    }

    const headTable = ['Фамилия', 'Имя', 'Отчество', 'Дата рождения']
  
  
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
                Ввести фамилию:
              </div>
              <input 
              value= {element.surname}
              onChange={e => setElement({...element, surname: e.target.value})}
              />
            </div>
            <div className= {styles.postRow}>
              <div className= {styles.postText}>
                Ввести имя:
              </div>
              <input 
              value= {element.name}
              onChange={e => setElement({...element, name: e.target.value})}
              />
            </div>
            <div className= {styles.postRow}>
              <div className= {styles.postText}>
                Ввести отчество:
              </div>
              <input 
              value= {element.patronymic}
              onChange={e => setElement({...element, patronymic: e.target.value})}
              />
            </div>
            <div className= {styles.postRow}>
              <div className= {styles.postText}>
                Указать дату рождения:
              </div>
              <input 
              value= {element.date}
              onChange={e => setElement({...element, date: e.target.value})}
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
  
  export default Student