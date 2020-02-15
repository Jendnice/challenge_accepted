
const powerReducer = (state = { powers: [], challenges: [] }, action) => {

    // debugger 
    
        switch (action.type) {

            case 'LOADING_POWERS':
                // loading powers
                return {
                    ...state,
                    powers: [...state.powers],
                }  
            
            case 'ADD_POWERS':
                // add powers
                return {
                    ...state,
                    powers: action.payload
                }

            
            case 'LOADING_CHALLENGES':
                // loading challenges
                return {
                    ...state,
                    challenges: [...state.challenges],
                }  
            
            case 'ADD_CHALLENGES':
                // add challenges
                return {
                    ...state,
                    challenges: action.payload
                }


        //     case 'COMPLETE_TODO':
   
        // // const todoUpdate = state.find(todo => todo.id == action.payload)
        // // todoUpdate.complete = true
        // // return state
        // const newState = state.map(todo => todo.id == action.payload ? { ...todo, complete: true } : todo )
        // return newState


        // case 'ADD_POWER':
        //     let power = {
        //         id: action.payload.id,
        //         name: action.payload.name,
        //         description: action.payload.description,
        //         info: action.payload.info
        //     }
        //    return { ...state, powers: [...state.powers, power] }
        
        // case 'ADD_REVIEW':
        //     let challenge = { 
        //         id: action.payload.id, 
        //         name: action.payload.name, 
        //         description: action.payload.description,
        //         completed: action.payload.completed,
        //         powerId: action.payload.powerId }
        //     return { ...state, challenges: [...state.challenges, challenge] }


        default:
            return state
        
    }

}

export default powerReducer


