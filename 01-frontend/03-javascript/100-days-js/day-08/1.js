/*
=============================================================================
Problem 1: Password Validator

Create a function called `validatePassword` that takes a password string.

Rules:

- Password length should be at least 8 characters.
- Password should contain at least one number.
- Password should contain at least one uppercase letter.

Return:
- "Valid Password" if all conditions are satisfied.
- "Invalid Password" otherwise.

Test your function with different passwords.
=============================================================================
*/

function validatePassword(password) {
    let hasNumber = false;
    let hasUppercase = false;

    for (let char of password) {
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }

        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }
    }

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }
    }

    if (password.length >= 8 && hasNumber && hasUppercase) {
        return 'Valid Password';
    } else {
        return 'Invalid Password';
    }
}
console.log(validatePassword('Kaushal'));
