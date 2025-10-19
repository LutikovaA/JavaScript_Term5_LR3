export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-header bg-transparent border-0 text-center">
                            <img src="${data.src}" class="card-img-top" alt="${data.title}" style="width: 80px; height: 80px; object-fit: contain;">
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text flex-grow-1">${data.text}</p>
                            <div class="mt-auto">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge bg-primary">${data.price}</span>
                                    <span class="badge ${this.getRiskColor(data.risk)}">${data.risk}</span>
                                </div>
                                <button class="btn btn-outline-primary w-100" id="click-card-${data.id}" data-id="${data.id}">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        );
    }

    getRiskColor(risk) {
        switch (risk) {
            case 'Низкий': return 'bg-success';
            case 'Средний': return 'bg-warning';
            case 'Высокий': return 'bg-danger';
            default: return 'bg-secondary';
        }
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listener);
    }
}