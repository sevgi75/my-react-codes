const initialState = {
    todoList: [{id: new Date.getTime(), text: "Learn Redux", completed: false}],
}
//? Types
export const ADD = "ADD"
export const DEL = "DEL"
export const CLR = "CLR"
export const CMP = "CMP"

//? action creator functions
export const addTodo = (payload) => ({type: ADD, payload})

//? Reducers
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    return { ...state, ...payload }

  default:
    return state
  }
}
