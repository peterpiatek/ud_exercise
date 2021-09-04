import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import {initLoad} from '../actions';
import AddUser from "./AddUser";

const AppContainer = ({todoList, initLoad}) => {

    const initTodos = [
        {id: 0, title: 'Finish todo list setup', done: false},
        {id: 1, title: 'Plan next work', done: false},
    ];

    const [initTodosArr, setinitTodosArr] = useState(initTodos);

    useEffect(() => {
        if(todoList.length === 0){
            initLoad(initTodosArr);
        }
    }, [initLoad, initTodosArr])

    const generateList = () => {
        return todoList.map(todo => {
            return (
                <div key={todo.title} style={{display: 'flex', alignItems: 'center'}}>
                    <h2>{todo.title}</h2>&nbsp;&nbsp;&nbsp;
                    <span>{todo.done ? 'done' : 'not done'}</span>
                </div>
            );
        })
    }
    return (
        <div>
            {generateList()}
            <br/><br/>
            <AddUser />
        </div>
    );
};

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {initLoad})(AppContainer);
