"use strict";
// We are here creating the class which takes up the maxcalories you want to set and it has function which takes the calores
class CalorieTracker {
    maxCalorie;
    currentCalorie;
    constructor(maxCalorie) {
        this.maxCalorie = maxCalorie;
        this.maxCalorie = maxCalorie;
        this.currentCalorie = 0;
    }
    calorieTracker(calorie) {
        this.currentCalorie += calorie;
        if (this.currentCalorie > this.maxCalorie) {
            logger("Max calorie reached");
        }
    }
}
// we can separate this logger function into another module and import it
function logger(msg) {
    console.log(msg);
}
const user1 = new CalorieTracker(2000); //here i set my max calories
// now i will update my calorie whenever i eat something
user1.calorieTracker(200);
user1.calorieTracker(200);
user1.calorieTracker(2000); //here when i reach my maxCalories i get the console.log  of it
// This is how we can make our code cleaner
