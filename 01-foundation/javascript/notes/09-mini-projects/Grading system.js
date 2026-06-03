let marks = 90;

// Outer if-else → Pass/Fail
if (marks >= 33) {
    console.log("You've Passed!");

    // Inner if-else → Grade system
    if (marks >= 90 && marks <= 100) {
        console.log("Grade: A");
    } else if (marks >= 80 && marks < 90) {
        console.log("Grade: B");
    } else if (marks >= 70 && marks < 80) {
        console.log("Grade: C");
    } else {
        // Nested else → Handles remaining passing grades (33–69)
        console.log("Grade: D");
    }
} else {
    console.log("You have Failed");
}