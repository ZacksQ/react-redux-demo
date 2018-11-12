import { mapStateToProps, mapDispatchToProps } from './store'
import Counter from './counter'
import { connect } from 'react-redux'

const Counter_Page = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default Counter_Page