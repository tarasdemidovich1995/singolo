export default class Navigation {
    constructor(navList, sections, burgerButton) {
        this.navList = navList;
        this.navHeight = window.innerWidth >= 768 ? 95 : 71;
        this.cooldown = false;
        this.timerID = null;
        this.sections = sections;
        this.burgerButton = burgerButton;
        this.navigation = this.navList.parentElement;
        this.popup = this.navigation.parentElement;

        this.burgerButton.onclick = this.burgerHandler.bind(this);
        this.navList.onclick = this.clickHandler.bind(this);
        window.onscroll = this.scrollHandler.bind(this);
    }

    getSectionsCoords() {
        const coords = new Map([['home', 0]]);
        this.sections.forEach(element => {
            if (element.id) coords.set(element.id, element.offsetTop - this.navHeight);
        });
        return coords;
    }

    setCooldown() {
        this.cooldown = true;
        this.timerID = setTimeout(() => {
            this.cooldown = false;
        }, 800);
    }
    getSectionByCoord(coord) {
        const sectionsCoords = this.getSectionsCoords()
        const coords = Array.from(sectionsCoords.values());
        const sections = Array.from(sectionsCoords.keys());
        for (let i = coords.length - 1; i >= 0; i--) {
            if (coord >= coords[i]) return sections[i];
        }
    }

    removeActiveStyle() {
        const activeLink = this.navList.querySelector('.link_nav_active');
        activeLink.classList.remove('link_nav_active');
    }

    clickHandler(event) {
        if (event.target.tagName != 'A') return;
        event.preventDefault();
        this.removeActiveStyle();
        const link = event.target;
        const reference = link.href.match(/(?<=#)\w+$/g).toString();
        const sectionsCoord = this.getSectionsCoords();
        const coord = sectionsCoord.get(reference);
        link.classList.add('link_nav_active');
        if (this.cooldown) {
            clearInterval(this.timerID);
            this.setCooldown();
        } else {
            this.setCooldown();
        }
        window.scrollTo(0, coord);
    }

    scrollHandler() {
        if (this.cooldown) return;
        const section = this.getSectionByCoord(window.pageYOffset);
        const link = this.navList.querySelector(`[href="#${section}"]`);
        this.removeActiveStyle();
        link.classList.add('link_nav_active');
    }

    burgerHandler() {
        if (this.navigation.classList.contains('navigation_show')) {
            this.burgerButton.classList.toggle('button_burger_active');
            this.navigation.classList.toggle('navigation_show');
            setTimeout(() => {
                this.popup.classList.toggle('header__right_show');
            }, 500);
        } else {
            this.burgerButton.classList.toggle('button_burger_active');
            this.navigation.classList.toggle('navigation_show');
            this.popup.classList.toggle('header__right_show');
        }
    }
}