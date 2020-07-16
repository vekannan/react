const initialState = {
    age: 30
}

export const ADD_AGE = 'ADD_AGE'
export const REDUCE_AGE = 'REDUCE_AGE'

const reducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case ADD_AGE:
            newState.age = newState.age + 2
            break
        case REDUCE_AGE:
            newState.age = newState.age - 2
            break
        default:
            break
            
    }
    return newState
}

export const addAge = () =>  ({type: 'ADD_AGE'})

export const reduceAge = () => ({type: 'REDUCE_AGE'})

export const add = () => ({type: 'ADD_AGE'})

export default reducer