
const powerReducer = (state = { powers: [], challenges: [] }, action) => {
    
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


