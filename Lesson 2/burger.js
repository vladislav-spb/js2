class ComponentsList {
    constructor(){
        this.extraToppings = [
            {id:1, name:Приправа, cost:15, cal:0},
            {id:2, name:Майонез, cost:20, cal:5},
        ];
        this.size = [
            {id:1, name:Маленький, cost:50, cal:20},
            {id:2, name:Большой, cost:100, cal:40},
        ];
        this.toppings = [
            {id:1, name:Сыр, cost:10, cal:20},
            {id:2, name:Салат, cost:20, cal:5},
            {id:3, name:Картофель, cost:15, cal:10},
        ]
    }

    calculatePrice() {
        let totalPrice = 0;
        this.ComponentsList.forEach(el => {
            if (el.id === this.size)
        });
    }
}
addTopping(topping) {    // Добавить добавку }
  removeTopping(topping) { // Убрать добавку }
  getToppings(topping) {   // Получить список добавок }
  getSize() {              // Узнать размер гамбургера }
  getStuffing() {          // Узнать начинку гамбургера }
  calculatePrice() {       // Узнать цену }
  calculateCalories() {    // Узнать калорийность }
}
