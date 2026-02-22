// Select elements from HTML
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");
const addButton = document.querySelector(".expense-form button");
const expenseList = document.querySelector(".expense-list ul");
const totalDisplay = document.querySelector(".total h2");

let totalAmount = 0;

// Add expense when button is clicked
addButton.addEventListener("click", () => {
    const amount = Number(amountInput.value);
    const description = descriptionInput.value;

    // Validation
    if (amount <= 0 || description === "") {
        alert("Please enter valid amount and description");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${description}</span>
        <span>₹${amount}</span>
    `;

    // Add to list
    expenseList.appendChild(li);

    // Update total
    totalAmount += amount;
    totalDisplay.textContent = `Total: ₹${totalAmount}`;

    // Clear inputs
    amountInput.value = "";
    descriptionInput.value = "";
});