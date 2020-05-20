import { connect } from "react-redux"
import UserEditor from "./UserEditor"
import PropTypes from 'prop-types';

UserEditor.propTypes = {
  userId: PropTypes.number.isRequired
}

const mSTP = state => ({
  userId: state.userToEdit
})

export default connect(mSTP)(UserEditor)