// export function fetchCats() {
//     return (dispatch) => {
//         dispatch({type: 'LOADING_CATS'})
//         fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
//         .then(response => response.json())
//         .then(cats => dispatch({type: 'ADD_CATS', cats: cats.images}))    
//     }
// }


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