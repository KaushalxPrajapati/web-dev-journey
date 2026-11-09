// Named exports: can export multiple functions from one file.
// When importing, you MUST use exact names inside curly braces:
// import { add, multiply } from './ExportFunctions.jsx';

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export function subtract(a, b) {
    return a - b;
}

// Kept for backward compatibility
export const substract = subtract;

export function divide(a, b) {
    return a / b;
}
