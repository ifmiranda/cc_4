// Coding Challenge #04 

// Step 2: Product Array 
const products = [ 
    { name: "Airpods Max", category: "electronics", price: 500, inventory: 25 }, 
    { name: "Aritzia sweatset", category: "apparel", price:50, inventory:30 }, 
    { name: "Organic lemons", category: "groceries", price: 8, inventory: 50 }, 
    { name: "Clorox wipes", category: "household", price:10, inventory: 60 }, 
    { name: "Hourglass blush", category: "beauty", price: 49, inventory: 20},
]; 
// Step 3: Category Discounts with switch 
 for (const product of products) {
    switch (product.category) {
        case "electronics":
            product.price *= 0.8; // 20% discount
            break; 
        case "apparel":
            product.price *= 0.85; // 15% discount 
            break; 
            case "groceries": 
            case "household":
            product.price *= 0.9; // 10% discount 
            break; 
            default: // No discount for this category 
            break;    
    }
    product.price =Number(product.price.toFixed(2)); 
 }
 console.log("Product prices after discount:", products); 



