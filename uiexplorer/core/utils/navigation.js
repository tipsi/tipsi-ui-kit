import { NavigationExperimental } from 'react-native'

const { StateUtils } = NavigationExperimental

export const PUSH_ROUTE = 'PUSH_ROUTE'
export const POP_ROUTE = 'POP_ROUTE'

export function push(key, params) {
  return {
    type: PUSH_ROUTE,
    payload: { key, ...params },
  }
}

export function pop() {
  return {
    type: POP_ROUTE,
  }
}

// Example inital state
// const initialState = {
//   index: 0,
//   routes: [{ key: 'App' }],
// }

export function createNavigationReducer(initialState) {
  return function cardStackReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
    case PUSH_ROUTE:
      if (state.routes[state.index].key === payload.key) return state
      return StateUtils.push(state, payload)
    case POP_ROUTE:
      if (state.index === 0 || state.routes.length === 1) return state
      return StateUtils.pop(state)
    default:
      return state
    }
  }
}
