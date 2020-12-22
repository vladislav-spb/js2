const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    #goods;

    constructor(container = '.products') {
        this.container = container;
        this.#goods = [];
        this.allProducts = [];

        this.#getGoods().then(data => {
            this.#goods = [...data];
            this.#render();
        }); 
        
        
    }

    /*#fetchGoods() {
        this.#goods = [
            {id: 1, title: 'Notebook', price: 20000, img: 'https://webshop.asus.com/de/media/image/89/98/28/1687-90NB0NW1-M00530_2kbMqYtE2EGAQu_200x200.png'},
            {id: 2, title: 'Mouse', price: 1500, img: 'http://pics.redblue.de/artikelid/TR/1130522/CHECK'},
            {id: 3, title: 'Keyboard', price: 5000, img: 'https://www.freepngimg.com/thumb/keyboard/37379-2-keyboard-transparent-image-thumb.png'},
            {id: 4, title: 'Gamepad', price: 4500, img: 'http://cdn.shopify.com/s/files/1/0277/3113/2555/collections/df86aec894828bdc7117abc37d187712_1200x1200.png?v=1586398240'},
        ];
    }*/

    #getGoods() {
        return fetch(`${API}/catalogData.json`)
        .then(response => response.json())
        .catch(err => console.log('Error'));
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
        //let totalPrice = this.#goods.reduce((total, item) => total + item.price,0);
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
class BasketItem {
    // отображаем товары что и на странице
    constructor(productBasket, img = 'https://placehold.it/200x150') {
        this.title = productBasket.title;
        this.price = productBasket.price;
        this.id = productBasket.id;
        this.img = productBasket.img || img;
    }
    // метод отображение товаров в корзине
    render() {
        return `<div class="basket-item" data-id="${this.id}">
                    <img class="basket-img" src="${this.img}" alt="${this.title}">
                    <div class="basket-info">
                        <h3 class="basket-title">${this.title}</h3>
                        <p class="basket-cost">${this.price}</p>
                    </div>
                    <button class="deleteItem">&times;</button>
                </div>
                <button class="placeOrder"> Оформить заказ </button>`
    }
}


class Basket {
    #goods;
    constructor(container = '.basketProducts') {
        this.container = container;
        this.addGoods = [];
    }

    // Метод добавление товара в корзину
    addToBasket(id) {
       /* let toBasket = list.#goods.map((item) => {
            if (id === item.id) {
                toBasket = {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    img: item.img,
                }
            }
            return toBasket;
        });*/
        let toBasket;
        list.#goods.forEach(item => {
            if (id === item.id) {
                toBasket = {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    img: item.img || img,
                }
            }
        });
        this.addGoods.push(toBasket);
        placeOrder();
    }

    // Метод удаление товара из корзины
    deleteFromBasket() {
       // let deleteBasket = this.addGoods.map((item, i) => {
       //     return id === item.id ? deleteBasket = i: item.id;
       // })
        let deleteBasket;
        this.addGoods.forEach((item,i) => {
            if (id === item.id){
                deleteBasket = i;
            }
        });
        this.addGoods.splice(deleteBasket, 1);
        this.render();
    }

    // Метод подсчета стоимости всех товаров в корзине
    calcBasket() {
        let totalPriceBasket = this.addGoods.reduce((total, item) => total + item.price, 0);
        let totalBasketAnswer = `Общая стоимость всех товаров ровна: ${totalPriceBasket}`;

    }

    // Метод оформления заказа при наличии там товаров
    placeOrder() {
        let count = this.addGoods.length;
        document.getElementById('cartcoint').innerHTML = ' (' + count + ')';
    }

    // рендер карзины
    render() {
        const blockBasket = document.querySelector(this.container);

        for (let productBasket of this.#goods) {
            const productObjectBasket = new BasketItem(productBasket);
      
            this.addGoods.push(productObjectBasket);

            blockBasket.insertAdjacentHTML('beforeend', productObjectBasket.render());
        }
        calcBasket();
    }
}

const list = new ProductList();
const cart = new Basket();


let getRequest = (url) => {
    return new Promise((resolve, reject) => {
      
        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();
        xhr.open('GET', url, true);

        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);

        xhr.send();
        
    });
};
console.log(getRequest(`${API}/catalogData.json`).then()
    .catch((err) => {
    console.log('error');
}));


