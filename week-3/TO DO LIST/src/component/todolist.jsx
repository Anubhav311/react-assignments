// TodoList.js
import { useState } from 'react';
import TodoItem from './todoitem';

function TodoList() {
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addItem = () => {
    if (newTask.trim() === '') return;
    const newItem = {
      id: new Date().getTime(),
      task: newTask,
      completed: false,
      createdAt: new Date(),
    };
    setItems([...items, newItem]);
    setNewTask('');
  };

  const updateItem = (id, updatedTask, completed) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            task: updatedTask,
            completed: completed !== undefined ? completed : item.completed,
          }
        : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        
        <input
          type="text"
          placeholder="Add a new task" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onDelete={deleteItem}
            onUpdate={updateItem}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;