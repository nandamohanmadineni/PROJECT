let promise = new Promise(function(resolve, reject) { 
    resolve("Image Downloaded"); 
}); 

promise.then(function(result) { 
    console.log(result); 
});
