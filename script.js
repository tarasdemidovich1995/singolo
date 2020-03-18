function slider(background, slides, buttonLeft, buttonRight) {
    let n = 0;
    let cooldown = false;
    const length = slides.children.length;

    function move(direction) {
        switch (direction) {
            case 'right':
                slides.style.transform = `translateX(-${(++n) * 100}%)`;
                break;
            case 'left':
                slides.style.transform = `translateX(-${(--n) * 100}%)`;
                break;
        }
    }

    function setCooldown() {
        cooldown = true;
        setTimeout(() => { cooldown = false }, 300);
    }

    function changeBackground() {
        background.classList.toggle('slider_blue');
    }

    buttonLeft.onclick = () => {
        if (cooldown) return;
        if (n <= length - 1 && n > 0) {
            move('left');
            setCooldown();
            changeBackground();
        } else {
            slides.classList.remove('with-animation');
            const movingSlide = slides.children[length - 1];
            move('right');
            slides.children[length - 1].remove();
            slides.prepend(movingSlide);
            setTimeout(() => {
                slides.classList.add('with-animation');
                move('left');
                changeBackground();
            }, 10);
            setCooldown();
        }
    }

    buttonRight.onclick = () => {
        if (cooldown) return;
        if (n >= 0 && n < length - 1) {
            move('right');
            setCooldown();
            changeBackground();
        } else {
            slides.classList.remove('with-animation');
            const movingSlide = slides.children[0];
            move('left');
            slides.children[0].remove();
            slides.append(movingSlide);
            setTimeout(() => {
                slides.classList.add('with-animation');
                move('right');
            }, 10);
            setCooldown();
            changeBackground();
        }
    }
}

const slides = document.querySelector('.carousel__slides');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const background = document.querySelector('.slider');

slider(background, slides, arrowLeft, arrowRight);