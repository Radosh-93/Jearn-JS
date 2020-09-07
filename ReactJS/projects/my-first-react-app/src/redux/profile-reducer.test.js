import profileReducer, {addPost, deletePost} from "./profile-reducer";

it('length of post should be incremented', () => {
    //1. test data
    let initialState = {
        postsData: [
            {id: 1, content: 'Hey, why nobody love me?', likesCount: 15},
            {id: 2, content: 'Wow, I still learn React!', likesCount: 8},
            {id: 3, content: 'Some text in the post...', likesCount: 3},
            {id: 4, content: 'Kukaracha bla bla...', likesCount: 5},
            {id: 5, content: 'Bugaga buzinga...', likesCount: 5},
        ]
    }
    //2. action
    let action = addPost('test')

    let newState = profileReducer(initialState, action);
    //3. Expectation
    expect(newState.postsData.length).toBe(6)
})
it('text of post should be correct', () => {
    //1. test data
    let initialState = {
        postsData: [
            {id: 1, content: 'Hey, why nobody love me?', likesCount: 15},
            {id: 2, content: 'Wow, I still learn React!', likesCount: 8},
            {id: 3, content: 'Some text in the post...', likesCount: 3},
            {id: 4, content: 'Kukaracha bla bla...', likesCount: 5},
            {id: 5, content: 'Bugaga buzinga...', likesCount: 5},
        ]
    }
    //2. action
    let action = addPost('test')

    let newState = profileReducer(initialState, action);
    //3. Expectation
    expect(newState.postsData[newState.postsData.length-1].content).toBe('test')
})
it('after deleting length of posts should be decrement', () => {
    //1. test data
    let initialState = {
        postsData: [
            {id: 1, content: 'Hey, why nobody love me?', likesCount: 15},
            {id: 2, content: 'Wow, I still learn React!', likesCount: 8},
            {id: 3, content: 'Some text in the post...', likesCount: 3},
            {id: 4, content: 'Kukaracha bla bla...', likesCount: 5},
            {id: 5, content: 'Bugaga buzinga...', likesCount: 5},
        ]
    }
    //2. action
    let action = deletePost(2)

    let newState = profileReducer(initialState, action);
    //3. Expectation
    expect(newState.postsData.length).toBe(4)
})
it('after deleting length of posts should be decrement if id is incorrect', () => {
    //1. test data
    let initialState = {
        postsData: [
            {id: 1, content: 'Hey, why nobody love me?', likesCount: 15},
            {id: 2, content: 'Wow, I still learn React!', likesCount: 8},
            {id: 3, content: 'Some text in the post...', likesCount: 3},
            {id: 4, content: 'Kukaracha bla bla...', likesCount: 5},
            {id: 5, content: 'Bugaga buzinga...', likesCount: 5},
        ]
    }
    //2. action
    let action = deletePost(100)

    let newState = profileReducer(initialState, action);
    //3. Expectation
    expect(newState.postsData.length).toBe(5)
})