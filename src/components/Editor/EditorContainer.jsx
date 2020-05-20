import { connect } from "react-redux"
import * as creacterActions from "../redux/createrAction";
import * as contactActions from "../redux/contactsAction"
import * as editorAction from "../redux/editorAction"
import Editor from "./Editor"
import PropTypes from 'prop-types';

Editor.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })),
  toggleCreater: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  toggleEditor: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
}

const mSTP = state => ({
  items: state.contacts
})

const mDTP = dispatch => ({
  toggleCreater: () => dispatch(creacterActions.toggleCreater(false)),
  addContact: (newContact) => dispatch(contactActions.addContact(newContact)),
  toggleEditor: () => dispatch(editorAction.toggleEditor(false)),
  updateContact: () => dispatch(contactActions.updateContact())
})

export default connect(mSTP, mDTP)(Editor)