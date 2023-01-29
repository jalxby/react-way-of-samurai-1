import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}

    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;          //Pattern Observer
    },

    dispatch(action) { //{type: ''ADD-POST}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.profilePage, action)
        this._callSubscriber(this._state);
    }
}


export default store
window.store = store

//store - OOP