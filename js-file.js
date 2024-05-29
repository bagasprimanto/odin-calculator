function add(a,b) {
    if(typeof(a) === 'number' && typeof(b) === 'number') {
        return a + b;
    }
}

console.log(add(1,2));
console.log(add(4,2));
console.log(add(1,-2));