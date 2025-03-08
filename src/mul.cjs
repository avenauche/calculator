function mul(...num){
    let out = 1;
    num.forEach((n) => out*=n)
    return out;
}

module.exports =  {mul};