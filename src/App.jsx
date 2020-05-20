import React, { Component } from "react";
import style from "./App.module.css";
import axios from "axios";
import ContactsList from "./components/ContactsList/ContactListContainer";
import Editor from "./components/Editor/EditorContainer";
import PaginationBox from "./components/PaginationBox/PaginationBoxContainer";
import UserEditor from "./components/UserEritor/UserEditorContainer";
import { CSSTransition } from "react-transition-group";
import popTransition from "./transitions/pop.module.css";
import URLS from "./service/url";

class App extends Component {
  async componentDidMount() {
    try {
      const { data } = await axios.get(URLS.GET_POST_URL);
      this.props.fullStateContacts(data);
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.contacts !== prevProps.contacts) {
      return;
    }

    try {
      const { data } = await axios.get(URLS.GET_POST_URL);
      this.props.fullStateContacts(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { creater, openEditor, editor } = this.props;

    return (
      <div className={style.app}>
        <button className={style.createBtn} onClick={openEditor}>
          Create new contact
        </button>
        <CSSTransition
          in={creater}
          timeout={250}
          classNames={popTransition}
          unmountOnExit
        >
          <Editor />
        </CSSTransition>
        <CSSTransition
          in={editor}
          timeout={250}
          classNames={popTransition}
          unmountOnExit
        >
          <UserEditor />
        </CSSTransition>
        <PaginationBox />
        <ContactsList />
      </div>
    );
  }
}

export default App
