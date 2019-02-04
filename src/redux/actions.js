import { database } from "../database/config";

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

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

//add post to firebae
export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({ [post.id]: post }).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

//fetch posts
export function startLoadingPosts() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function loadPosts(posts) {
    return {
        type: "LOAD_POSTS",
        posts
    }
}

export function loadComments(comments){
    return{
        type: "LOAD_COMMENTS",
        comments
    }
}

export function startRemovingPost(index, id) {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePosts(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}


export function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database.ref('comments/' + postId).push(comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoaddinComments() {
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot)=>{
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        })
    }
}