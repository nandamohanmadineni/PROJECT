let num = 1291;
let original = num;
let rev = 0;

while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
}

if (original == rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}