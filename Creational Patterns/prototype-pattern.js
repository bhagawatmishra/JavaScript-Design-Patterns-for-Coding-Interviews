var car = {
    drive(){
        console.log("Started Driving")
        },
    brake(){
        console.log("Stopping the car")
    },
    numofWheels : 4  
} 

const car1 = Object.create(car);
car1.drive();
car1.brake();
console.log(car1.numofWheels);

const car2 = Object.create(car)
car2.drive();
car2.brake();
console.log(car2.numofWheels);

console.log((car1.__proto__) == car)
console.log((car2.__proto__) == car)

//defining the extra property color with value red
const car3 = Object.create(car,{color :{value: "red"}});
console.log(car3.color)

//defining the extra property color with value red black
const car4 = Object.create(car, {color : {value: "red black"}});
console.log(car4.color)