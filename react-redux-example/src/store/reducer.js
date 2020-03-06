const initialState = {
    age: 1  
}

export const ADD_AGE = 'Add_age'
export const REDUCE_AGE = 'REDUCE_AGE'
const reducer = (state = initialState, action) => {
    const newState = state
    switch (action.type) {
        case ADD_AGE:
            newState = newState.age + 1
        case REDUCE_AGE:
            newState = newState.age - 1
    }
}

export default reducer