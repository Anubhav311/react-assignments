document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    const todos = [];

    todoForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const todoText = todoInput.value.trim();

        if (todoText !== "") {
            const listItem = document.createElement("li");
            const todoTextElement = document.createElement("span");
            todoTextElement.textContent = todoText;

            listItem.appendChild(todoTextElement);
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            listItem.appendChild(checkbox);

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");
            removeButton.addEventListener("click", function() {
                todoList.removeChild(listItem);
                removeTodo(listItem);
            });

            const updateButton = document.createElement("button");
            updateButton.textContent = "Update";
            updateButton.classList.add("update-btn");
            updateButton.addEventListener("click", function() {
                todoTextElement.contentEditable = true;

                todoTextElement.addEventListener("blur", function() {
                    todoTextElement.contentEditable = false;
                });
            });
            listItem.appendChild(checkbox);
            listItem.appendChild(removeButton);
            listItem.appendChild(updateButton);
            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    listItem.classList.add("completed");
                    addTimestamp(listItem, "Completed");
                    const todo = todos.find((todo) => todo.element === listItem);
                    if (todo) {
                        todo.completed = true;
                        todo.completedTime = new Date();
                    }
                } else {
                    listItem.classList.remove("completed");
                    removeTimestamp(listItem, "Completed");
                    const todo = todos.find((todo) => todo.element === listItem);
                    if (todo) {
                        todo.completed = false;
                        todo.completedTime = null;
                    }
                }
                sortTodos()
            });
            addTimestamp(listItem, "Created");
            todos.push({
                element: listItem,
                createdTime: new Date(),
                completed: false,
                completedTime: null,
            });

            todoList.appendChild(listItem);
            todoInput.value = "";
            sortTodos();
        }
    });
});

function addTimestamp(item, type) {
    const timestamp = document.createElement("span");
    const date = new Date();
    timestamp.textContent = `${type} on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
    timestamp.classList.add("timestamp");
    item.appendChild(timestamp);
}

// Function to remove a timestamp by type
function removeTimestamp(item, type) {
    const timestamps = item.querySelectorAll(".timestamp");
    timestamps.forEach((timestamp) => {
        if (timestamp.textContent.includes(type)) {
            item.removeChild(timestamp);
        }
    });
}

function removeTodo(item) {
    const index = todos.findIndex((todo) => todo.element === item);
    if (index !== -1) {
        todos.splice(index, 1);
        todoList.removeChild(item);
        sortTodos(); // Sort the to-do items after removing an item.
    }
}

// Function to sort the to-do items based on a given criteria
function sortTodos() {
    const sortCriteria = document.querySelector('input[name="sort"]:checked').value;

    todos.sort(function(a, b) {
        if (sortCriteria === "created") {
            return a.createdTime - b.createdTime;
        } else if (sortCriteria === "completed") {
            if (a.completed && !b.completed) {
                return 1;
            } else if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && b.completed) {
                return a.completedTime - b.completedTime;
            }
        }
        return 0;
    });

    // Clear the todoList and re-append the sorted items
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    todos.forEach(function(todo) {
        todoList.appendChild(todo.element);
    });
}

// Event listener for radio buttons to toggle sorting
const sortRadios = document.querySelectorAll('input[name="sort"]');
sortRadios.forEach(function(radio) {
    radio.addEventListener("change", sortTodos);
});