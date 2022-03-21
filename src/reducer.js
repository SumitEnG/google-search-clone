export const initialState = {
    payload : null
}

export const action = {
     SET_SEARCH_PAYLOAD : 'SET_SEARCH_PAYLOAD' 
}
 
 
const reducer = (state,action) => {
      switch(action.type){
          case 'SET_SEARCH_PAYLOAD':
              return {...state, payload: action.payload
      }
      default: return state
}
}

export default reducer;