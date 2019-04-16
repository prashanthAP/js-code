// Write a JavaScript program to display the current day and time in the following format. //Today is : Tuesday. And // Current time is : 10 PM : 30 : 38

function dayDateDisplayFormat(){
    let date = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    console.log("Today is :",days[date.getDay()]);

    date.setHours(1,14,56);
    // if(date.getHours() > 12){
    //     var dateFormat = date.getHours()-12 +' PM';
    // }else{
    //     dateFormat = date.getHours() +' AM';
    // }
    let time = date.getHours()>12 ? date.getHours()-12+' PM' : date.getHours()+' AM';
    
    console.log("Current time is: ",time,':', date.getMinutes(),':',date.getSeconds());
}

dayDateDisplayFormat();