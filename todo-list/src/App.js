import React, {Component} from 'react';
import './App.css';
import PageTemplate from "./components/PageTemplate";
import TodoInputContainer from "./containers/TodoInputContainer";
import TodoListContainer from "./containers/TodoListContainer";

class App extends Component {
    render() {
        return (
            <PageTemplate>
                <TodoInputContainer/>
                <TodoListContainer/>
            </PageTemplate>
        );
    }
}

export default App;