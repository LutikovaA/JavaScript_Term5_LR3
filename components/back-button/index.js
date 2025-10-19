export class BackButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(clickBack) {
        return (
            `
                <button class="btn btn-light mb-3" id="back-button">
                    ← Назад к списку
                </button>
            `
        )
    }

    addListeners(clickBack) {
        document
            .getElementById('back-button')
            .addEventListener('click', clickBack)
    }

    render(clickBack) {
        const html = this.getHTML(clickBack)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(clickBack)
    }
}