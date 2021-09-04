export const initLoad = (initTodos) => {
    return {
        type: 'INIT_LOAD',
        payload: initTodos
    }
}

export const addUser = (newUser) => {
    return {
        type: 'ADD_USER',
        payload: newUser
    }
}

export const addTodo = (newtodo) => {
    return {
        type: 'ADD_TODO',
        payload: newtodo
    }
}
