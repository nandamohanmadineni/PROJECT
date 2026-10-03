let age = 20;

let checkAge = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Eligible"); 
    } else {
        reject("Not eligible");
    }
});

checkAge
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
