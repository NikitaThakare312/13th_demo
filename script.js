// script.js

// Check if there are any existing expenses in local storage
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Render existing expenses
renderExpenses();

function addExpense() {
    const expenseAmount = document.getElementById('expenseAmount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    // Validate input
    if (expenseAmount.trim() === '' || description.trim() === '' || category.trim() === '') {
        alert('Please enter expense amount, description, and category.');
        return;
    }

    // Create a new expense object
    const expense = {
        amount: parseFloat(expenseAmount),
        description: description,
        category: category
    };

    // Add the expense to the array
    expenses.push(expense);

    // Save expenses to local storage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Render the updated expenses
    renderExpenses();

    // Clear the form fields
    document.getElementById('expenseAmount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
}

function deleteExpense(index) {
    // Remove the expense at the specified index
    expenses.splice(index, 1);

    // Save expenses to local storage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Render the updated expenses
    renderExpenses();
}

function renderExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    // Render each expense
    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `${expense.amount.toFixed(2)} - ${expense.description} - ${expense.category} 
        <button class="btn btn-danger btn-sm float-right" onclick="deleteExpense(${index})">Delete Expense</button>`;

        expenseList.appendChild(listItem);
    });
}
