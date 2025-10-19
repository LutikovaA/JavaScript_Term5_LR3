export class AlertComponent {
    constructor(parent) {
        this.parent = parent;
    }

    show(message, type = 'success') {
        const alertId = `alert-${Date.now()}`;
        const html = `
            <div id="${alertId}" class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;

        this.parent.insertAdjacentHTML('afterbegin', html);

        //автоматически скрываем через 5 секунд
        setTimeout(() => {
            const alertElement = document.getElementById(alertId);
            if (alertElement) {
                alertElement.remove();
            }
        }, 5000);
    }
}