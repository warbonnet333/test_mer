import React from "react"
import style from "./ContactItem.module.css"
import { ReactComponent as EditImg } from "../../images/5899562021543238878.svg"
import { ReactComponent as DeleteImg } from "../../images/19915307351541068754.svg"
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, surname, desc, onDeleteItem, openEditor, addUserId }) => {

  const editUser = () => {
    addUserId(id)
    openEditor()
  }

  return <li className={style.item}>
    <div className={style.nameContainer}>
      <p className={style.name}>{name}</p>
      <p className={style.surname}>{surname}</p>
    </div>
    <p className={style.descr}>{desc}</p>
    <div className={style.editors}>
      <span className={style.editBtn} onClick={editUser}>
        <EditImg />
      </span>
      <span className={style.deleteBtn} onClick={onDeleteItem}>
        <DeleteImg />
      </span>
    </div>
  </li>
}

ContactItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  openEditor: PropTypes.func.isRequired,
  addUserId: PropTypes.func.isRequired,
}

export default ContactItem