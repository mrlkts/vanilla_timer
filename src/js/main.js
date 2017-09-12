'use strict';

(function(){
    var days, hours, minutes, seconds, currentDateTime, difference;
    var targetDateTime = new Date("Dec 31, 2017 00:00:00").getTime();
    var interval = 1000;

    function Timer(){
        this.days = document.getElementById('days');
        this.hours = document.getElementById('hours');
        this.minutes = document.getElementById('minutes');
        this.seconds = document.getElementById('seconds');

        this.refreshTime = function(d,h,m,s){
            days.textContent = d;
            hours.textContent = h;
            minutes.textContent = m;
            seconds.textContent = s;
        }
    }

    var timer = new Timer();

    setInterval(function(){
        currentDateTime = new Date.UTC().getTime();
        difference = targetDateTime - currentDateTime;

        if(difference > 0){
            days = Math.floor(difference / (1000 * 60 * 60 * 24));
            hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((difference % (1000 * 60)) / 1000);

            timer.refreshTime(days, hours, minutes, seconds);
        } else {
            alert("Happy New Year, friendo");
        }

    }, interval);
}());