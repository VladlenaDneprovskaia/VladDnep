import React, { useState } from 'react'
import List from '../List'
import styles from '../Schedule/Schedule.module.css'

const Choreographer = () => {

    const parent = 'Список хореографов'
  
    const [items, setItem] = useState(
      [
        {id: '1', surname: 'Гончаров' , name: 'Алексей', gender: 'Мужской', choreography: 'Hip-Hop'},
        {id: '2', surname: 'Мальцева' , name: 'Ангелина', gender: 'Женский', choreography: 'Современная хореография'},
        {id: '3', surname: 'Назарова' , name: 'Валентина', gender: 'Женский', choreography: 'k-pop хореография'},
      ]
    )
  
    const [element, setElement] = useState({id: '', surname: '', name: '', gender: '', choreography: ''})
  
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
      setElement({id: '', surname: '', name: '', gender: '', choreography: ''})
      setActive(false)
    }

    const headTable = ['Фамилия', 'Имя', 'Пол', 'Хореография']
  
  
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
                Указать пол:
              </div>
              <input 
              value= {element.gender}
              onChange={e => setElement({...element, gender: e.target.value})}
              />
            </div>
            <div className= {styles.postRow}>
              <div className= {styles.postText}>
                Выбрать хореографию:
              </div>
              <input 
              value= {element.choreography}
              onChange={e => setElement({...element, choreography: e.target.value})}
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
  
  export default Choreographer