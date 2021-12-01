const countdown = document.querySelector('.countdown');
const targetDate = new Date('Dec 24, 2021, 00:00:01').getTime();
//milliseconds since Jan 1, 1970, 00:00:00.000 GMT

const interval = setInterval(() => {
    console.log('tick');

    const now = new Date().getTime(); //get current time
    console.log(now);

    const timeLeft = targetDate - now;

    const days = math.floor(timeleft/(1000*60*60*24));
    const hours = Math.floor(timeleft % (1000*60*60*24) / (1000*60*60));
    const minutes = Math.floor(timeleft % (1000*60*60) / (1000*60));
    const seconds = Math.floor(timeleft % (1000*60)/ 1000);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    countdown.innerHTML = '
    <div><span>dd päeva</span></div>
                <div><span>hh tundi</span></div>
                <div><span>mm minutit</span></div>
                <div><span>ss sekundit</span></div>
    
    
    
    '

} , 1000);