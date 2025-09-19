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

 // Step 4: // Customer type discounts with if..else 
    function extraDiscount(customerType) { 
        if (customerType === "student") { 
        return  0.05; 
        } else if (customerType === "senior") {
        return  0.07; 
        } else {
           return 0;  //anything else 
        }
    }
// Step 5: Checkout Process & Inventory 
const customerTypes = ["regular", "student","senior"];
 for (let i = 1; i <= 3; i++) {
    const customerType = customerTypes[i -1];
    const discountRate = extraDiscount(customerType);
    
    let subtotal = 0; 

    for (const item of products) {
        if (item.inventory > 0) {
            subtotal += item.price; 
            item.inventory--; // update 
        } else { 
            console.log(`Out of stock for Customer ${i}: ${item.name}`); 
            }
        }

    const  finalTotal = subtotal *  (1 - discountRate); 
    console.log(`Customer ${i}: (${customerType}) total: $${finalTotal.toFixed(2)}}`); 
 } 
// Step 6: Inspecting Products 
const firstProduct = products[0]; 
 for (const key in firstProduct ) {
    console.log(`${key}: ${firstProduct[key]}`); 
 } 
