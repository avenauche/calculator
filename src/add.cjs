function add(...num){
    let sum = 0;
    num.forEach((n) => sum+=n)
    return sum;
}

module.exports = { add }