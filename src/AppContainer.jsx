import App from "./App"
import { connect } from "react-redux";
import * as editorActions from "./components/redux/createrAction";
import * as contactsActions from "./components/redux/contactsAction";
import PropTypes from 'prop-types';

App.propTypes = {
  creater: PropTypes.bool.isRequired,
  editor: PropTypes.bool.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })),
  fullStateContacts: PropTypes.func.isRequired,
  openEditor: PropTypes.func.isRequired,
}

const mSTP = (state) => ({
  creater: state.creater,
  contacts: state.contacts,
  editor: state.editor,
});

const mDTP = (dispatch) => ({
  fullStateContacts: (arr) => dispatch(contactsActions.fullContacts(arr)),
  openEditor: () => dispatch(editorActions.toggleCreater(true)),
});

export default connect(mSTP, mDTP)(App);