function showTime() {
    const endDate = 1692712800;
    const difference = Date.now()/1000 - endDate;
    const clockObject = document.getElementById('clock-container');

    if (difference <= 0) {
        clockObject.innerHTML = '<a href="https://youtube.com/playlist?list=PLETbi5VcKSbLldrpKApWPn6lJRtsMt-NN">Już jest!</a>';
        return;
    }

    const days = Math.floor(difference/86400).toString().padStart(2, '0');
    const hours = Math.floor((difference-days*86400)/3600).toString().padStart(2, '0');
    const minutes = Math.floor((difference-(hours*3600+days*86400))/60).toString().padStart(2, '0');
    const seconds = Math.floor(difference-(minutes*60+hours*3600+days*86400)).toString().padStart(2, '0');
    clockObject.innerText = `${days}:${hours}:${minutes}:${seconds}`;

    setTimeout(showTime, 1000);
}

showTime();