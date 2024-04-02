function factorial(n) {
    // Base case: if n is 0 or 1, factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    } 
    // Recursive case: if n is greater than 1, calculate factorial recursively
    else {
        return n * factorial(n - 1);
    }
}

// Test the function with different inputs
console.log(factorial(0)); // Expected output: 1 (0! = 1)
console.log(factorial(1)); // Expected output: 1 (1! = 1)
console.log(factorial(5)); // Expected output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(factorial(10)); // Expected output: 3628800 (10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800)