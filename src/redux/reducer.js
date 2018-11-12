import { INCREASE_ACTION, DECREASE_ACTION } from './actionTypes'

export const counter_reducer = (state = { count: 0 }, action) => {
    const count = state.count
    switch (action.type) {
        case INCREASE_ACTION.type:
            return {
                count: count + 1
            }
        case DECREASE_ACTION.type:
            return {
                count: count - 1
            }
        default:
            return state
    }
}