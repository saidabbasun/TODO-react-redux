const initialState=[
   
]

const todos=(state=initialState,action)=>{
switch(action.type) {
    case 'ADD_TODO':
    return {
        ...state,
        
    }
    default:
        return state

}
}

export default todos