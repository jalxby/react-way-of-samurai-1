let rerenderEntireTree = () => {
    console.log('state changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi!', likesCount: '10'},
            {id: 2, message: 'It\'s my first post', likesCount: '12'},
            {id: 3, message: 'The second', likesCount: '33'},
            {id: 4, message: 'Go home', likesCount: '0'},
            {id: 5, message: 'I\'m gonna be a developer', likesCount: '14'},
            {id: 6, message: 'It-incubator', likesCount: '23'}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Andrey'},
            {id: 6, name: 'Valery'}
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How is you it-camasutra?'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'Hello!'},
            {id: 5, message: 'Go go go!'},
            {id: 6, message: 'Ready?'}
        ]
    }

}
window.state = state
export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: '0'
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer
}
export default state