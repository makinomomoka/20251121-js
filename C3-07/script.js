const button = document.querySelector('.btn-sparkle');

function createSparkle(){
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');


    const size = Math.random() * 6 + 4;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    const x = Math.random() * button.offsetWidth;
    const y = Math.random() * button.offsetHeight;

    button.appendChild(sparkle);


    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    setTimeout( () => {
        sparkle.remove();
    }, 2000);
}

function sparkleEffect() {
    setInterval(createSparkle, 300);
}

sparkleEffect();