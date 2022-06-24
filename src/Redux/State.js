import {rerenderEntireTree} from './../Render'

let state = {

    profilePage: {
        postsData: [
            { id: 1, message: 'My first message', likesCount: 0 },
            { id: 2, message: 'My second message', likesCount: 10 },
            { id: 3, message: 'My third message', likesCount: 15 }
        ],
        newPostText: ''
    },

    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Zhambyl' },
            { id: 2, name: 'Kentaro' },
            { id: 3, name: 'Berserk' },
            { id: 4, name: 'React' },
        ],

        messagesData: [
            { message: 'redux' },
            { message: 'navlinks' },
            { message: 'space' }
        ]
    }


}

export let addPost = () => {
    let post = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(post)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let updatePostText = (newPost) => {
    
    state.profilePage.newPostText = newPost;
    rerenderEntireTree(state);
}

export default state;