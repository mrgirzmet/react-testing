import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodosRemaining from './TodosRemaining';
import TodoItem from './TodoItem';
import TodosCheckAll from './TodosCheckAll';
import TodosFiltered from './TodosFiltered';
import TodosClearCompleted from './TodosClearCompleted';
import { observer} from 'mobx-react-lite';
import { inject } from 'mobx-react';

const App = inject("TodoStore")(observer(({TodoStore: {  todoInput, addTodo, todosFiltered,todosCompletedCount }}) => {
  return ( 
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Todo-container">
          <input type="text" className="todo-input" placeholder="What needs to be done" ref={todoInput} onKeyUp={addTodo} />

          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
          {todosFiltered.map(todo =>
            <TodoItem key={todo.id} todo={todo} />
          )}
          </ReactCSSTransitionGroup>

          <div className="extra-container">
            <TodosCheckAll />
            <TodosRemaining />
          </div>

          <div className="extra-container">
            <TodosFiltered />

            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
            {todosCompletedCount > 0 &&
              <TodosClearCompleted />
            }
            </ReactCSSTransitionGroup>

          </div>

        </div> { /* End Todo-Container */ }
      </div>
)}));
export default App;