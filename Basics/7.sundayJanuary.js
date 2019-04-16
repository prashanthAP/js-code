// A Program to find 1st January is being a Sunday between 2014 and 2050.
function sundayJanuary(start, End){
    let Result = [];
    for(let i=start;i<=End;i++){
        let d = new Date(i, 0, 1);
        if(d.getDay() === 0){
            Result.push(i);
        }
    }
    return Result;
}

console.log(sundayJanuary(2014, 2050));