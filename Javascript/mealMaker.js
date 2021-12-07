let menu = {
    _courses : {
        appetizers: [],
        mains: [],
        desserts: [],
    } ,
    get appetizers() {
        return this._courses.appetizers;

    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(mains) {
        this._courses.mains = mains
    },
    get desserts(){
        return this._courses.desserts;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses(){
        return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._course.desserts,
        }
    },


    addDishToCourse (courseName, dishName, dishPrice) {
        const dish = {
          name: dishName,
          price: dishPrice,
        };
        
        this._courses[courseName].push(dish);
      },
      

    getRandomDishFromCourse (courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
      },


      

    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse("appetizers");
        let main = this.getRandomDishFromCourse("mains");
        let dessert = this.getRandomDishFromCourse("desserts");
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `Your dinner meal is ${appetizer.name}, ${main.name} and ${dessert.name}.
        The total price is $${totalPrice.toFixed(2)}.`; 
    }
}
menu.addDishToCourse("mains", "wings", 4.3);
menu.addDishToCourse("mains", "fries", 3.7);
menu.addDishToCourse("mains", "beefsteaks", 5.3)

menu.addDishToCourse("appetizers", "salad", 3.4)
menu.addDishToCourse("appetizers", "soup", 2.9)
menu.addDishToCourse("appetizers", "noodles", 3.7)

menu.addDishToCourse("desserts", "fruits", 2.5)
menu.addDishToCourse("desserts", "pana-cotta", 2.6)
menu.addDishToCourse("desserts", "cake", 3.0)

let menuTotal = menu.generateRandomMeal();

console.log(menuTotal);

