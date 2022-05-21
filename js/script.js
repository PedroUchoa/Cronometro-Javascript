
let minutos = 0;
let segundos = 0;
let milesimos = 0;
let interval;
let seconds = document.getElementById('seconds');
let tens = document.getElementById('tens');
let minutes = document.getElementById('minutes');

document.getElementById('button-start').addEventListener('click', () => {
    interval = setInterval(start, 10);
})

document.getElementById('button-stop').addEventListener('click', () => {
    clearInterval(interval);
})

document.getElementById('button-reset').addEventListener('click', () => {
    minutos = 0;
    segundos = 0;
    minutos = 0;
    tens.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML ='00';
})

function start() {
    if (milesimos <= 9) {
        tens.innerHTML = '0' + milesimos;
        milesimos++;
    } else{
        tens.innerHTML = milesimos;
        milesimos++;
    }
    if (milesimos == 100) {
        milesimos = 0;
        segundos++;
    }

    if (segundos <= 9) {
        seconds.innerHTML = '0' + segundos;
 
    } else{
        seconds.innerHTML = segundos;
    }
    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos<=9) {
        minutes.innerHTML = '0' +minutos;
    }else{
        minutes.innerHTML = minutos;
    }

}

