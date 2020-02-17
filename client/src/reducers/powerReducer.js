const powerReducer = (state = { powers: [], challenges: [] }, action) => {

        switch (action.type) {

            case 'LOADING_POWERS':
                return {
                    ...state,
                    powers: [...state.powers],
                }  
            
            case 'ADD_POWERS':
                return {
                    ...state,
                    powers: action.payload
                }

            
            case 'LOADING_CHALLENGES':
                return {
                    ...state,
                    challenges: [...state.challenges],
                }  
            
            case 'ADD_CHALLENGES':
                return {
                    ...state,
                    challenges: action.payload
                }


            default:
                return state
        
    }

}

export default powerReducer
