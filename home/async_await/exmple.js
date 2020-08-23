// async/await被称之为异步编程的终极解决方案
aget = async () => {
    return 4
}
console.log(aget);

console.log(() => {
    return new Promise(resolve => {
        resolve();
    })
})

console.log(aget());

console.log(function () {
    return new Promise(resolve => {
        resolve(4);
    })
}())

foo = async () => {
    throw new Error('error');
}
console.log(foo());

console.log(function () {
    return new Promise((resolve, reject) => {
        reject(new Error('error'))
    })
}());