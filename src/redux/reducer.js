import posts from '../data/posts'

const postReducer = function posts(state = posts  , action) {
    //remove action
    console.log(action.index)
    return state
}

export default postReducer