import React from 'react'
import styles from '../List/List.module.css'

const ListItem = (props) => {
  if (props.parent == 'Расписание занятий'){
    return (
      <div>
        <tr>
          {props.delActive &&
              <td><button className= {styles.closeBtn} onClick={() => props.removeItem(props.item)}></button></td>
            }
          <td>{props.item.choreography}</td>
          <td>{props.item.name}</td>
          <td>{props.item.classroom}</td>
          <td>{props.item.time}</td>
        </tr>
      </div>
    )
  } else if (props.parent == 'Список хореографов'){
    return (
      <div>
        <tr>
          {props.delActive &&
              <td><button className= {styles.closeBtn} onClick={() => props.removeItem(props.item)}></button></td>
            }
          <td>{props.item.surname}</td>
          <td>{props.item.name}</td>
          <td>{props.item.gender}</td>
          <td>{props.item.choreography}</td>
        </tr>
      </div>
    )
  } else{
    return (
      <div>
        <tr>
          {props.delActive &&
              <td><button className= {styles.closeBtn} onClick={() => props.removeItem(props.item)}></button></td>
            }
          <td>{props.item.surname}</td>
          <td>{props.item.name}</td>
          <td>{props.item.patronymic}</td>
          <td>{props.item.date}</td>
        </tr>
      </div>
    )
  }
}

export default ListItem