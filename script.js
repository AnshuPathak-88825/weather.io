const currDate = document.getElementsByClassName('date-month');
const weathercon = document.getElementById('weathercon');
let weather = "Clouds";
let weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
let monthsname = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

var getcurrrentday = () => {
    let currenttime = new Date();
    const day = weekday[currenttime.getDay()];
    const Month = monthsname[currenttime.getMonth()];
    const date = currenttime.getDate();
    const minute = currenttime.getMinutes();
    let Hours = currenttime.getHours();
    var period;
    if (Hours > 11) {
        period = "PM";
        if (Hours > 12) {
            Hours -= 12;
        }
    }
    currDate[0].innerHTML=day+ "|"+Month + date + "|" +Hours+":"+minute;
    // Thursday|JAN 20|2:15
// + " " +date + " |" + Hours +":"+minute;

}
getcurrrentday();