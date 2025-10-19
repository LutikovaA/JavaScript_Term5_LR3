
//import {ButtonComponent} from "../../components/button/index.js";
//import {ProductCardComponent} from "../../components/product-card/index.js";
import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";
import { AlertComponent } from "../../components/alert/index.js";




export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.alert = new AlertComponent(parent);
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return (
            `
                <div class="container mt-4">
                    <h1 class="text-center mb-4">Финансовые продукты</h1>
                    <div id="main-page" class="row g-3"></div>
                </div>
            `
        )
    }
    getData() {
        return [
            {
                id: 1,
                src: "https://cdn-icons-png.flaticon.com/512/3135/3135692.png",
                title: "Инвестиционный портфель",
                text: "Диверсифицированные инвестиции с доходностью до 15% годовых",
                price: "от 50 000 ₽",
                risk: "Средний"
            },
            {
                id: 2,
                src: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
                title: "Накопительный счет",
                text: "Высокий процент на остаток с возможностью снятия",
                price: "от 1 000 ₽",
                risk: "Низкий"
            },
            {
                id: 3,
                src: "https://cdn-icons-png.flaticon.com/512/1055/1055662.png",
                title: "Торговые алгоритмы",
                text: "Автоматическая торговля на финансовых рынках",
                price: "от 100 000 ₽",
                risk: "Высокий"
            },
        ]
    }


    clickCard(e) {
        const cardId = e.target.dataset.id;

        //всплывающее сообщение
        this.alert.show(`Переходим к деталям продукта #${cardId}`, 'info');

        //пауза для показа сообщения перед переходом
        setTimeout(() => {
            const productPage = new ProductPage(this.parent, cardId);
            productPage.render();
        }, 1000);
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const data = this.getData();
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot);
            productCard.render(item, this.clickCard.bind(this));
        });

        //приветственное сообщение
        this.alert.show('Добро пожаловать на финансовый портал "Инвестируем с ИБМ"!', 'success');
    }
}