function sub(...num){
    let [first, ...others] = num;
    others.forEach((n) => first-=n)
    return first;
}

module.exports =  {sub};