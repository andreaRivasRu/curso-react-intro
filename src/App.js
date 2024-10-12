import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: 'Ir al gym', completed: false},
  {text: 'Tomar curso React', completed: false},
  {text: 'Cocinar', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter 
        total={15} 
        completed={10} 
      />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />     
    </React.Fragment>
  );
}


export default App;
