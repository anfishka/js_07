document.addEventListener('DOMContentLoaded', () => {
    let colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
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
