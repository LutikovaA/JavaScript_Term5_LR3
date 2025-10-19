import { ProductComponent } from "../../components/product/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { AlertComponent } from "../../components/alert/index.js";
import { MainPage } from "../main/index.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
        this.alert = new AlertComponent(parent);
    }

    getData() {
        const products = {
            1: {
                id: 1,
                src: "https://cdn-icons-png.flaticon.com/512/3135/3135692.png",
                title: "Инвестиционный портфель студента",
                text: "Профессионально управляемый портфель из акций, облигаций и ETF. Диверсификация по отраслям и странам. Идеально для долгосрочного инвестирования.",
                details: "Доходность: до 15% годовых\nМинимальный срок: 1 год\nУправляющая компания: EBMTrust",
                price: "от 50 000 ₽"
            },
            2: {
                id: 2,
                src: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
                title: "Накопительный счет бакалавра",
                text: "Счет с повышенной процентной ставкой и полной ликвидностью. Пополняйте и снимайте средства в любой момент без потери процентов.",
                details: "Процентная ставка: 8% годовых\nКапитализация: ежемесячно\nСтрахование: до 1.4 млн ₽",
                price: "от 1 000 ₽"
            },
            3: {
                id: 3,
                src: "https://cdn-icons-png.flaticon.com/512/1055/1055662.png",
                title: "Торговые алгоритмы магистра",
                text: "Автоматизированная система торговли на фондовых и валютных рынках. Использует машинное обучение для анализа рыночных данных.",
                details: "Средняя доходность: 20-30% годовых\nМаксимальная просадка: 15%\nМониторинг: 24/7",
                price: "от 100 000 ₽"
            }
        };
        return products[this.id] || products[1];
    }

    get pageRoot() {
        return document.getElementById('product-page');
    }

    getHTML() {
        return (
            `
                <div class="container mt-4">
                    <div id="product-page"></div>
                </div>
            `
        );
    }

    clickBack() {
        this.alert.show('🔙 Возвращаемся к списку продуктов', 'info');
        setTimeout(() => {
            const mainPage = new MainPage(this.parent);
            mainPage.render();
        }, 800);
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const data = this.getData();
        const product = new ProductComponent(this.pageRoot);
        product.render(data, this.clickBack.bind(this));

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        //сообщение о загрузке продукта
        this.alert.show(`Загружены детали: "${data.title}"`, 'success');
    }
}