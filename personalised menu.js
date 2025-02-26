// Personalized Greeting 
let userName = prompt("Enter your first name:");
if (!userName) {
  userName = "Guest";
}

//  Welcome Message
alert(`Welcome to EatNow cafe, ${userName}!`);

//  Display Menu Items in Console 
let menuItems = ["Biriani", "Nyama choma", "Chapati", "Beef Burger", "Tilapia"];
console.log("Menu:");
menuItems.forEach((item, index) => {
console.log(`${index + 1}. ${item}`);
});

//  Adding a New Dish 
let newDish = prompt("Suggest a new dish for our menu:");
if (newDish) {
menuItems.push(newDish);
console.log("Updated Menu:");
menuItems.forEach((item, index) => {
console.log(`${index + 1}. ${item}`);
  });
} else {
  console.log("No new dish added.");
}

// Display the code in the HTML code block
document.getElementById("codeBlock").textContent = `
// Step 1: Personalized Greeting (3 Marks)
let userName = prompt("Enter your first name:");
if (!userName) {
  userName = "Guest";
}

//  Welcome Message 
alert(\`Welcome to EatNow cafe, \${userName}!\`);

//  Display Menu Items in Console 
let menuItems = ["Grilled Chicken", "Caesar Salad", "Pasta Carbonara", "Beef Burger", "Vegetable Stir-fry"];
console.log("Menu:");
menuItems.forEach((item, index) => {
  console.log(\`\${index + 1}. \${item}\`);
});

//  Adding a New Dish 
let newDish = prompt("Suggest a new dish for our menu:");
if (newDish) {
  menuItems.push(newDish);
  console.log("Updated Menu:");
  menuItems.forEach((item, index) => {
    console.log(\`\${index + 1}. \${item}\`);
  });
} else {
  console.log("No new dish added.");
`;
