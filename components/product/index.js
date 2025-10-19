export class ProductComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="card shadow">
                            <div class="card-header bg-primary text-white">
                                <h4 class="mb-0">${data.title}</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4 text-center">
                                        <img src="${data.src}" class="img-fluid rounded" alt="${data.title}" style="max-height: 200px;">
                                        <div class="mt-3">
                                            <h3 class="text-success">${data.price}</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h5>Описание</h5>
                                        <p class="lead">${data.text}</p>
                                        
                                        <h5>Детали предложения</h5>
                                        <div class="bg-light p-3 rounded">
                                            ${data.details.split('\n').map(line => `<p class="mb-1">• ${line}</p>`).join('')}
                                        </div>
                                        
                                        <div class="mt-4">
                                            <button class="btn btn-success btn-lg w-100" id="invest-btn">
                                                💰 Инвестировать сейчас
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        );
    }

    addListeners() {
        const investBtn = document.getElementById('invest-btn');
        if (investBtn) {
            investBtn.addEventListener('click', () => {
                alert('Спасибо за интерес к инвестициям! Наш факультет свяжется с вами в ближайшее время.');
            });
        }
    }

    render(data) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners();
    }
}