class ProductList {
    #goods;

    constructor(container = '.products') {
        this.container = container;
        this.#goods = [];
        this.allProducts = [];

        this.#fetchGoods();
        this.#render();
    }

    #fetchGoods() {
        this.#goods = [
            {id: 1, title: 'Notebook', price: 20000, img: 'https://webshop.asus.com/de/media/image/89/98/28/1687-90NB0NW1-M00530_2kbMqYtE2EGAQu_200x200.png'},
            {id: 2, title: 'Mouse', price: 1500, img: 'http://pics.redblue.de/artikelid/TR/1130522/CHECK'},
            {id: 3, title: 'Keyboard', price: 5000, img: 'https://www.freepngimg.com/thumb/keyboard/37379-2-keyboard-transparent-image-thumb.png'},
            {id: 4, title: 'Gamepad', price: 4500, img: 'http://cdn.shopify.com/s/files/1/0277/3113/2555/collections/df86aec894828bdc7117abc37d187712_1200x1200.png?v=1586398240'},
        ];
    }

    #render() {
        const block = document.querySelector(this.container);

        for (let product of this.#goods) {
            const productObject = new ProductItem(product);
      
            this.allProducts.push(productObject);

            block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

    calcAllProduct() {
        let totalPrice = 0;
        this.#goods.forEach(good => {
            if (this.#goods.price !== undefined) {
                totalPrice += this.#goods.price
            }
        });
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img || img;
    }
    getHTMLString(){
        return `<div class="product-item" data-id="${this.id}">
              <img class="prod-img" src="${this.img}" alt="${this.title}">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}

class Basket {
    constructor() {
        this.addGoods = [];
    }
    // Метод добавление товара в корзину
    addToBasket() {}
    // Метод удаление товара из корзины
    deleteFromBasket() {}
    // Метод подсчета стоимости всех товаров в корзине
    calcBasket() {}
    // Метод оформления заказа при наличии там товаров
    placeOrder() {}
    // рендер карзины
    render() {}
    // Метод открывания корзины
    openBasket() {}
    
}

class BasketItem {
    // отображаем товары что и на странице
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.img = product.img || img;
    }
    // метод отображение товаров в корзине
    render() {}
}

const list = new ProductList();