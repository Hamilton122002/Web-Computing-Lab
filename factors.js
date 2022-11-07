var n = 6786;
console.log(`The factors of ${n} is: `);
for (let i = 1; i <= n; i++) {
    if (n % i == 0){
    console.log(i);
    }
}