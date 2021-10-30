import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function generateId() {
  return '_' + Math.random().toString(36).substr(2,9)
}

function Todo () {
  const [todos, setTodos] = React.useState([])
  const [input, setInput] = React.useState('')

  const handleSubmit = () => {
    setTodos((todos) => todos.concat(
      {
        text: input,
        id: generateId()
      }
    ))
    setInput('')
  }

  const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id != id))

  return (
    <div>
    <h1>todos</h1>
    <input 
      type="text"
      value={input}
      placeholder="new todo"
      onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>
        submit
      </button>
    <div>
    <ul>
      {todos.map(({ text, id }) => (
        <li key={id}>
        <span>{text}</span>
        <button onClick={() => removeTodo(id)}>X</button>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
