// Select elements from HTML
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");
const addButton = document.querySelector(".expense-form button");
const expenseList = document.querySelector(".expense-list ul");
const totalDisplay = document.querySelector(".total h2");

// Store total amount
let totalAmount = 0;

// Add expense when button is clicked
addButton.addEventListener("click", () => {
    const amount = Number(amountInput.value);
    const description = descriptionInput.value.trim();

    // Validation
    if (amount <= 0 || description === "") {
        alert("Please enter a valid amount and description");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Description
    const descSpan = document.createElement("span");
    descSpan.textContent = description;

    // Amount
    const amountSpan = document.createElement("span");
    amountSpan.textContent = `₹${amount}`;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.border = "none";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.cursor = "pointer";

    // Delete expense logic
    deleteBtn.addEventListener("click", () => {
        expenseList.removeChild(li);
        totalAmount -= amount;
        totalDisplay.textContent = `Total: ₹${totalAmount}`;
    });

    // Append elements to list item
    li.appendChild(descSpan);
    li.appendChild(amountSpan);
    li.appendChild(deleteBtn);

    // Add list item to expense list
    expenseList.appendChild(li);

    // Update total
    totalAmount += amount;
    totalDisplay.textContent = `Total: ₹${totalAmount}`;

    // Clear input fields
    amountInput.value = "";
    descriptionInput.value = "";
});