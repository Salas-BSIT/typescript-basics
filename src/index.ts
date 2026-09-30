//src/index.ts
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from './services/userService';

import {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    createProduct,
    updateProductStock,
    deleteProduct
} from './services/productService';

console.log("=".repeat(50));
console.log("TypeScript Basics lab - Running!");
console.log("=".repeat(50));

// --- USER OPERATIONS ---
console.log("\n USER OPERATIONS");
console.log("-".repeat(50));

console.log("\n1. All users:");
console.log(getAllUsers());

console.log("\n2. Get user by ID (2):");
console.log(getUserById(2));

console.log("\n3. Create a new user:");
const newUser = createUser({ 
    name: "Bob Johnson", 
    email: "bob@johnson@example.com",
    age: 25 
});
console.log(newUser);

console.log("\n4. Update user (Change Email):");
const updatedUser = updateUser(1, { email: "john.updated@example.com" });
console.log(updatedUser);

console.log("\n5. Delete user (ID: 3):");
console.log("Deleted", deleteUser(3));

console.log("\nAll users after operations:");
console.log(getAllUsers());

// --- PRODUCT OPERATIONS ---
console.log("\n\n PRODUCT OPERATIONS");
console.log("=".repeat(50));

console.log("\n1. All products:");
console.log(getAllProducts());

console.log("\n2. Get product by ID (1):");
console.log(getProductById(1));

console.log("\n3. Get products by category ('books'):");
console.log(getProductsByCategory('books'));

console.log("\n4. Create a new product:");
const newProduct = createProduct({
    name: "Typecraft Handbook",
    description: "Official Typescript Guide",
    price: 29.99,
    stock: 100,
    category: 'books'
});
console.log(newProduct);

console.log("\n5. Update product stock (ID: 1 → 10):");
console.log(updateProductStock(1, 10));

console.log("\n6. Delete product (ID: 2):");
console.log("Deleted", deleteProduct(2));

console.log("\nAll products after operations:");
console.log(getAllProducts());

console.log("\n" + "=".repeat(50));
console.log("\n\n TypeScript Basics lab - Finished!");
console.log("\n" + "=".repeat(50));


//=============================================================================================================================
// There was my attempt to try fix the errors at this stage only to narrow down by 1, then was told to not include this and undo all my attempts.
//=============================================================================================================================
