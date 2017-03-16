import { connect } from 'react-redux'

import Counter from '../components/Counter'
import { addCounter } from '../actions'

const mapState = state => ({
  counter: state.counter
})

const mapDispatch = dispatch => ({
  addCounter: () => dispatch(addCounter())
})

export default connect(mapState, mapDispatch)(Counter)
