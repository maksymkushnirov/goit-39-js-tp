const loader = document.getElementById('loader');
const load = document.getElementById('loading');

let newTime = 0;

export function loading() {

    newTime = newTime + 1;

    if (newTime > 100) {
        newTime = 0;
        load.style.transition = '1s all';
        load.style.opacity = '0';
        clearInterval(myTime);
    } else {
        loader.textContent = newTime + "%";
    }
}

loading();

const myTime = setInterval(loading, 200);