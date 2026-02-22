// Select elements
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");
const addButton = document.querySelector(".expense-form button");
const expenseList = document.querySelector(".expense-list ul");
const totalDisplay = document.querySelector(".total h2");

// Load expenses from localStorage or empty array
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let totalAmount = 0;

// Function to render expenses
function renderExpenses() {
    expenseList.innerHTML = "";
    totalAmount = 0;

    expenses.forEach((expense, index) => {
        const li = document.createElement("li");

        const descSpan = document.createElement("span");
        descSpan.textContent = expense.description;

        const amountSpan = document.createElement("span");
        amountSpan.textContent = `₹${expense.amount}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.border = "none";
        deleteBtn.style.background = "transparent";
        deleteBtn.style.cursor = "pointer";

        // Delete logic
        deleteBtn.addEventListener("click", () => {
            expenses.splice(index, 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            renderExpenses();
        });

        li.appendChild(descSpan);
        li.appendChild(amountSpan);
        li.appendChild(deleteBtn);
        expenseList.appendChild(li);

        totalAmount += expense.amount;
    });

    totalDisplay.textContent = `Total: ₹${totalAmount}`;
}

// Add expense
addButton.addEventListener("click", () => {
    const amount = Number(amountInput.value);
    const description = descriptionInput.value.trim();

    if (amount <= 0 || description === "") {
        alert("Please enter a valid amount and description");
        return;
    }

    expenses.push({ description, amount });
    localStorage.setItem("expenses", JSON.stringify(expenses));

    renderExpenses();

    amountInput.value = "";
    descriptionInput.value = "";
});

// Load saved expenses on page load
renderExpenses();