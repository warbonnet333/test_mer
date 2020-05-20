import React, { Component } from "react"
import style from "./Editor.module.css"
import axios from "axios"
import URLS from "../../service/url"

class Editor extends Component {
  state = {
    name: "",
    surname: "",
    desc: "",
  }

  componentDidMount() {
    const arr = this.props.items
    const id = this.props.userId
    const userToEdit = arr.find(item => item.id === id)
    if (!userToEdit) return
    this.setState({
      name: userToEdit.name,
      surname: userToEdit.surname,
      desc: userToEdit.desc
    })
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmitUpdate = async (e) => {
    e.preventDefault()
    try {

      await axios.put(`${URLS.PUT_DELETE_URL}/${this.props.userId}`, {
        ...this.state
      })
      this.props.updateContact()
      this.props.toggleEditor()
    } catch (error) {
      console.log(error)
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(URLS.GET_POST_URL, {
        ...this.state
      })

      this.props.addContact(result.data)
      this.props.toggleCreater()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { name, surname, desc } = this.state
    return (
      <div className={style.container}>
        <div className={style.editor}>
          <h3 className={style.title}>{this.props.userId ? "Update contact" : "Create new contact"} </h3>
          < form className={style.form} action="" onChange={this.handleChange} onSubmit={this.props.userId ? this.handleSubmitUpdate : this.handleSubmit}>
            <input className={style.form_main} name="name" type="text" placeholder="Name" value={name} required />
            <input className={style.form_main} name="surname" type="text" placeholder="Surname" value={surname} />
            <label htmlFor="descr">Description:</label>
            <textarea className={style.form_descr} name="desc" id="" cols="30" rows="10" placeholder="Maybe some description for this contact?" value={desc}></textarea>
            <div className={style.buttons}>
              <input className={style.submitBtn} type="submit" value={this.props.userId ? "Update" : "Create"} />
              <input className={style.cancelBtn} type="button" value="Cancel" onClick={this.props.userId ? this.props.toggleEditor : this.props.toggleCreater} />
            </div>
          </form>
        </div>
      </div>)

  }
}

export default Editor