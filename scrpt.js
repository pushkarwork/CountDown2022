let DaysOriginal = document.getElementById("days");
let HoursOriginal = document.getElementById("hours");
let MinutesOriginal = document.getElementById("minutes");
let SecondsOriginal = document.getElementById("seconds");

let FutureTime = new Date(2022, 0, 1)

function timeLeft() {
    const TodayTime = new Date();

    let DaysLeft = Math.floor((FutureTime.getTime() - TodayTime.getTime()) / 1000 / 60 / 60 / 24);
    let HoursLeft = Math.floor((FutureTime.getTime() - TodayTime.getTime()) / 1000 / 60 / 60 % 24);
    let MinutesLeft = Math.floor((FutureTime.getTime() - TodayTime.getTime()) / 1000 / 60 % 60);
    let SecondsLeft = Math.floor((FutureTime.getTime() - TodayTime.getTime()) / 1000 % 60)

    DaysOriginal.innerText = DaysLeft;
    HoursOriginal.innerText = HoursLeft;
    MinutesOriginal.innerText = MinutesLeft;
    SecondsOriginal.innerText = SecondsLeft;
}

setInterval(timeLeft, 1000)


