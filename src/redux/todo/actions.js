export const addItem = item => {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

export const setClearInput = value => {
  return {
    type: 'SET_CLEAR_INPUT',
    payload: value
  }
}

export const removeItem = item => {
  return {
    type: 'REMOVE_ITEM',
    payload: item
  }
}