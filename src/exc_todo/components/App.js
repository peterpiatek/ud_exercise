import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TodoList from "./TodoList";
import TodoNew from "./TodoNew";
import TodoEdit from "./TodoEdit";
import TodoDetails from "./TodoDetails";
import Header from "./Header";

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={TodoList}/>
                        <Route path="/todo/new" exact component={TodoNew}/>
                        <Route path="/todo/edit/:id" exact component={TodoEdit}/>
                        <Route path="/todo/details/:id" exact component={TodoDetails}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
