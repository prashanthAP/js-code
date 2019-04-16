// 3.Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or d-mm-yyyy, dd/mm/yyyy

function currentDate(){
    let date = new Date();
    let month = date.getMonth()+1;
    console.log(month+'-'+date.getDate()+'-'+date.getFullYear());
    console.log(month+'/'+date.getDate() +'/'+date.getFullYear());
}

console.log(currentDate());