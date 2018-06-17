import months from './months';
import days from './days';
import maxDaysOfMonth from './maxDaysOfMonth'


let today = new Date();
let displayDate = today.toDateString();
today.setDate(1);  //setting current month's date to 1 to get which day of week it is.
let dayOfWeek = today.getDay();


let getMonthName = (number) => {
    return months[number];

}



export { displayDate, dayOfWeek, today, getMonthName }