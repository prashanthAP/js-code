// JavaScript: Check whether a given year is a leap year in the Gregorian calendar
const leapYear = (year) => {
    if (year%100 === 0 ? year%400 === 0 : year%4===0)
        return `${year} is Leap year`;

        return `${year} is not Leap year`;
}
console.log(leapYear(2000));