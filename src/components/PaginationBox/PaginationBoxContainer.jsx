import { connect } from "react-redux"
import * as pageActions from "../redux/pageActions"
import PaginationBox from "./PaginationBox"
import PropTypes from 'prop-types';

PaginationBox.propTypes = {
  page: PropTypes.number.isRequired,
  arr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })),
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
}

const mSTP = state => ({
  page: state.page,
  arr: state.contacts
})

const mDTP = dispatch => ({
  nextPage: () => dispatch(pageActions.next()),
  prevPage: () => dispatch(pageActions.prev())
})

export default connect(mSTP, mDTP)(PaginationBox)