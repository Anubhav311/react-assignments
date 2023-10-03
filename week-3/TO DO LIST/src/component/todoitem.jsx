/* eslint-disable react/prop-types */
// TodoItem.js
import { useState } from 'react';

function TodoItem({ item, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(item.task);

  const handleUpdate = () => {
    onUpdate(item.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div id ='itemblock'>
          <div id = 'item-left'>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onUpdate(item.id, item.task, !item.completed)}
          />
          <span
            style={{
              textDecoration: item.completed ? 'line-through' : 'none',
            }}
          >
            {item.task}
          </span>
          </div>
          <div id = 'item-right'>
          <button onClick={() => onDelete(item.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
