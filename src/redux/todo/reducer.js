const initialState = {
  items: [],
  clearInput: ''
}

export default function(state = initialState, action){

  switch(action.type){
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        clearInput: true
      };
    case 'SET_CLEAR_INPUT':
      return {
        ...state,
        clearInput: action.payload
      };
    case 'REMOVE_ITEM':
      const index = state.items.indexOf(action.payload);
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}