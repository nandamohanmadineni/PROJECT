function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Student data received");
        }, 2000);
    });
}

async function displayData() {
    console.log("Start");
    let result = await getData();
    console.log(result);
    console.log("End");
}

displayData();