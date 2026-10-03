function isPrime(n) {
    if (n < 2)
        return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}
let num = 6;
if (isPrime(num))
    console.log("Prime");
else
    console.log("Not a Prime ");
