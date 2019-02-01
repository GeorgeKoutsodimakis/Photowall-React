//remove

export function removePosts(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

//add posts
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comments){
    return{
        type: 'ADD_COMMENT',
        comments
    }
}