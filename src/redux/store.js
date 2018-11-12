import { createStore } from 'redux'
import { counter_reducer } from './reducer'
import { INCREASE_ACTION, DECREASE_ACTION } from './actionTypes'

const store = createStore(counter_reducer)
const mapStateToProps = (state) => {
    return {
        value: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInCreaseClick: () => dispatch(INCREASE_ACTION),
        onDeCreaseClick: () => dispatch(DECREASE_ACTION)
    }
}

export { store, mapStateToProps, mapDispatchToProps }