let promise = new Promise((resolve, reject) => {
  setTimeout(() => { 
    resolve("Data received Successfully"); 
  }); 
}); 

promise.then((result) => {
  console.log(result); 
});
