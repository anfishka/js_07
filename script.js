function animateDrop()
{
    document.addEventListener('DOMContentLoaded', () => {
    let colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
    let time = ['3s', '2s', '1s', '2.5s', '0.5s', '1.7sec', '1.3s']
    let mainDiv = document.getElementById('mainDiv');

    for(let i = 0; i < colors.length; i++) {
        let elem = document.createElement('div');
        elem.className = 'cube';
        elem.textContent = 'a';
        elem.style.backgroundColor = colors[i];

        elem.addEventListener('click', (e) => {
            e.target.style.animation = 'drop 1s';
            setTimeout(() => {
                e.target.remove();
            }, 1000);});

        mainDiv.appendChild(elem);
    }
});

}


// при клике на элемент он остается на месте, а остальные -анимированно падают вниз с разной скоростью

function  animateDropExceptClicked()
{

document.addEventListener('DOMContentLoaded', () => {
    let colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
    let mainDiv = document.getElementById('mainDiv');

    for (let i = 0; i < colors.length; i++) {
        let elem = document.createElement('div');
        elem.className = 'cube';
        elem.textContent = 'a';
        elem.style.backgroundColor = colors[i];
        mainDiv.appendChild(elem);
    }

    let time = ['3s', '2s', '1s', '2.5s', '0.5s', '1.7s', '1.3s'];
    let cubes = document.getElementsByClassName('cube');

    for (let i = 0; i < cubes.length; i++) {
        cubes[i].addEventListener('click', (e) => {
            let clicked = e.target;
            for (let j = 0; j < cubes.length; j++) {
                if (cubes[j] !== clicked) {
                    cubes[j].style.animation = `drop ${time[j]} forwards`;
                }
            }
        });
    }
});
}