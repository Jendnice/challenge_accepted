export const fetchPowers = () => {

    return (dispatch) => {
        dispatch({type: 'LOADING_POWERS'})
        return fetch('http://localhost:3000/powers')
        .then(resp => resp.json())
        .then(powers => {
        dispatch({type: "ADD_POWERS", payload: powers})
      })
    }
}


export const fetchChallenges = () => {

    return (dispatch) => {
        dispatch({type: 'LOADING_CHALLENGES'})
        return fetch('http://localhost:3000/challenges')
        .then(resp => resp.json())
        .then(challenges => {
        dispatch({type: "ADD_CHALLENGES", payload: challenges})
      })
    }
}
