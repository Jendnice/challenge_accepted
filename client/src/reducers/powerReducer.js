
export default function powerReducer(state = { powers: [], challenges: [] }, action) {

    switch (action.type) {

        case 'ADD_POWER':
            let power = {
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                info: action.payload.info
            }
           return { ...state, powers: [...state.powers, power] }
        
        case 'ADD_REVIEW':
            let challenge = { 
                id: action.payload.id, 
                name: action.payload.name, 
                description: action.payload.description,
                completed: action.payload.completed,
                powerId: action.payload.powerId }
            return { ...state, challenges: [...state.challenges, challenge] }


        default:
            return state
        
    }

}
