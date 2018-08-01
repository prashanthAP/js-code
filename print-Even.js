function printEven(n){
    var result=[];
    for(var i=0;i<=n;i++){
        if(i%2===0){
            result.push(i);
                }
        
    }
    return result;
}

console.log(printEven(10));

