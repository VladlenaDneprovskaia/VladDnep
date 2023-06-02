import React from 'react'
import styles from './List.module.css'
import ListItem from '../ListIem'

const List = (props) => {
  return (
    <div>
      <div className= {styles.headText}>{props.parent}</div>
      <table className= {styles.tableHeaders}>
        <tr>
        {props.delActive &&
              <td>Удаление</td>
            }
          <td>{props.headTable[0]}</td>
          <td className= {styles.fio}>{props.headTable[1]}</td>
          <td>{props.headTable[2]}</td>
          <td>{props.headTable[3]}</td>
        </tr>
      </table>
      <table className= {styles.tableContent}>{props.items.map((item, index) =>
      <ListItem item = {item} num = {index + 1} parent = {props.parent} delActive = {props.delActive} setDelActive = {props.setDelActive} removeItem = {props.removeItem}/>
      )}
      </table>
    </div>
  )
}

export default List