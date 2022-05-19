const initialState=[
    {
        id:1,
        text:'Buy milk'
    },
    {
        id:2,
        text:'Buy eggs'
    }
]

const todos=(state=initialState,action)=>{
switch(action.type) {
    case 'ADD_TODO',
    return {
        ... state
    }

}
}

export default todos