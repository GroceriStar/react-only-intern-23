let days = {0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat'};
let maxDaysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  //This is the array of maximum number of days in each month.
let today = new Date();
let displayDate = today.toDateString();
today.setDate(1);  //setting current month's date to 1 to get which day of week it is.
let dayOfWeek = today.getDay();


let getMonthName = (number) => {
    let monthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'October', 'Nov', 'Dec'];

    return monthArray[number];

}



export { days, maxDaysOfMonth, displayDate, dayOfWeek, today, getMonthName }