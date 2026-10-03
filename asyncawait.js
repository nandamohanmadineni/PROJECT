function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      if (username === "admin" && password === "admin") {
        resolve("Login success");
      } else {
        reject("Invalid credentials");
      }
    }, 2000); 
  });
}
