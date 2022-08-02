// src/redux/modules/counter.js

/* Action Value-------------------------------------------------------------*/
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
/* Action Creator-----------------------------------------------------------*/
console.log(ADD_TODO);
export const addTodo = (payload) => {
    return {
        type : ADD_TODO,
        payload,
    }
}
export const deleteTodo = (payload) => {
    return {
        type:DELETE_TODO,
        payload
    }
}
export const updateTodo = (payload) => {
    return {
        type:UPDATE_TODO,
        payload
    }
}
/* Initial State------------------------------------------------------------*/
const initialState = [
    // {id:Date.now(),title:'제목쓰11', content:'내용쓰11', done:false},
];
/* Reducer------------------------------------------------------------------*/
const todos = (state=initialState, action) => {
    console.log('state->',state);
    console.log('action1->',ADD_TODO);
    console.log('action2->',action);
    console.log('action3->',action.type);
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_TODO:
            return state.filter((v)=>v.id !== action.payload)
        case UPDATE_TODO:
            return state.map((v)=>v.id===action.payload? {...v, done:!v.done}:v );
        default:
            return state;
    }

}
/* export default reducer---------------------------------------------------*/
export default todos