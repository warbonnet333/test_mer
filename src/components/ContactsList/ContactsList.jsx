import React from "react"
import style from "./ContactsList.module.css"
import ContactItem from "../ContactItem/ContactItem"
import axios from "axios"
import paginItemsFive from "../../service/paginItemsFive"
import URLS from "../../service/url"

const ContactsList = ({ items, page, onDeleteItem, openEditor, addUserId }) => {

  async function onDeleteFromList(id) {
    try {
      axios.delete(URLS.PUT_DELETE_URL + id)
      onDeleteItem(id)
    } catch (error) {
      console.log(error)
    }
  }

  const finalArr = paginItemsFive(items, page)

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {finalArr.map(({ id, name, surname, desc }) =>
          <ContactItem
            key={id}
            name={name}
            surname={surname}
            desc={desc}
            onDeleteItem={() => onDeleteFromList(id)}
            openEditor={() => openEditor(id)}
            addUserId={() => addUserId(id)} />)}
      </ul>
    </div>
  )
}


export default ContactsList