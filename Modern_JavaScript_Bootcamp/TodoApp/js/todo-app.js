'use strict';

// array of objects for ToDo
const todos = getSavedTodos();

// object of filters
const filters = {
    searchText: '',
    checkgoxActivated: false
}

// Listening for the input for searching
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    filterTodos(todos, filters);
})

// Listening for submit, preventing default behaviour, listing all todos again
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    createNewTodo(todos, e.target.elements.textTodo.value);
    e.target.elements.textTodo.value = '';
    document.querySelector('#todos-div').innerHTML = '';
    filterTodos(todos, filters);
})

// Listening for the checkbox
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.checkgoxActivated = e.target.checked;
    filterTodos(todos, filters);
})

listAllTodos(todos);



