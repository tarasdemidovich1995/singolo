export default class Portfolio {
    constructor(filterList, projectsList) {
        this.filterList = filterList;
        this.projectsList = projectsList;

        this.filterList.onclick = this.filterHandler.bind(this);
        this.projectsList.onclick = this.projectHandler.bind(this);
    }

    sortProjects() {
        const sortedProjects = Array.from(this.projectsList.children).sort((a, b) => Math.random() - 0.5);
        this.projectsList.innerHTML = '';
        this.projectsList.append(...sortedProjects);
    }

    removeFilterActiveStyle() {
        const activeButton = this.filterList.querySelector('.button_filter_active');
        activeButton.classList.remove('button_filter_active');
    }

    removeProjectActiveStyle() {
        const activeLink = this.projectsList.querySelector('.link_project_active');
        console.log(activeLink);
        if (activeLink) activeLink.classList.remove('link_project_active');
    }

    filterHandler(event) {
        if (event.target.tagName != 'BUTTON' || event.target.classList.contains('button_filter_active')) return;
        this.removeFilterActiveStyle();
        event.target.classList.add('button_filter_active');
        this.sortProjects();
    }

    projectHandler(event) {
        if (event.target.tagName != 'IMG') return;
        event.preventDefault();
        this.removeProjectActiveStyle();
        event.target.parentNode.classList.add('link_project_active');
    }
}