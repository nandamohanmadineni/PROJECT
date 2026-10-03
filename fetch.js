async function getUsers() {
    let response=await fetch("https://jsonplaceholder.typicode.com/users");
    let Users=await response.json();
    console.log(Users);
}
getUsers();