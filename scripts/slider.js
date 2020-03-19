export default class Slider {

    constructor(background, slides, buttonLeft, buttonRight) {
        this.background = background;
        this.slides = slides;
        this.buttonLeft = buttonLeft;
        this.buttonRight = buttonRight;
        this.slideNum = 0;
        this.cooldown = false;
        this.length = slides.children.length;

        buttonLeft.onclick = this.leftHandler.bind(this);
        buttonRight.onclick = this.rightHandler.bind(this);
    }

    move(direction) {
        switch (direction) {
            case 'right':
                this.slides.style.transform = `translateX(-${(++this.slideNum) * 100}%)`;
                break;
            case 'left':
                this.slides.style.transform = `translateX(-${(--this.slideNum) * 100}%)`;
                break;
        }
    }

    setCooldown() {
        this.cooldown = true;
        setTimeout(() => { this.cooldown = false }, 300);
    }

    changeBackground() {
        this.background.classList.toggle('slider_blue');
    }

    leftHandler() {
        if (this.cooldown) return;
        if (this.slideNum <= this.length - 1 && this.slideNum > 0) {
            this.move('left');
            this.setCooldown();
            this.changeBackground();
        } else {
            this.slides.classList.remove('with-animation');
            const movingSlide = this.slides.children[this.length - 1];
            this.move('right');
            this.slides.children[this.length - 1].remove();
            this.slides.prepend(movingSlide);
            setTimeout(() => {
                this.slides.classList.add('with-animation');
                this.move('left');
                this.changeBackground();
            }, 10);
            this.setCooldown();
        }
    }

    rightHandler() {
        if (this.cooldown) return;
        if (this.slideNum >= 0 && this.slideNum < this.length - 1) {
            this.move('right');
            this.setCooldown();
            this.changeBackground();
        } else {
            this.slides.classList.remove('with-animation');
            const movingSlide = this.slides.children[0];
            this.move('left');
            this.slides.children[0].remove();
            this.slides.append(movingSlide);
            setTimeout(() => {
                this.slides.classList.add('with-animation');
                this.move('right');
            }, 10);
            this.setCooldown();
            this.changeBackground();
        }
    }
}