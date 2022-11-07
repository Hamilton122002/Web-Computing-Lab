var fib = function (n) {
    if (n == 1) {
        return [0, 1];
    }
    else {
        var s = fib(n - 1);
        s.push(s[s.length - 1] + s[s.length  - 2]);
        return s;
    }
}
console.log(fib(5))