import { connect } from "react-redux"
import * as contactActions from "../redux/contactsAction"
import * as editorAction from "../redux/editorAction"
import * as userIdAction from "../redux/userIdAction"
import ContactsList from "./ContactsList"
import PropTypes from 'prop-types';

ContactsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })),
  page: PropTypes.number.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  openEditor: PropTypes.func.isRequired,
  addUserId: PropTypes.func.isRequired,
}

const mSTP = state => ({
  items: state.contacts,
  page: state.page
})

const mDTP = dispatch => ({
  onDeleteItem: id => dispatch(contactActions.deleteContact(id)),
  openEditor: () => dispatch(editorAction.toggleEditor(true)),
  addUserId: (usrerId) => dispatch(userIdAction.addUserId(usrerId))
})

export default connect(mSTP, mDTP)(ContactsList)