const bikePrice = 15.678;
const carPrice = 90.2345;
const truckPrice = 123.965;

//
const maxPrice = Math.max(bikePrice, carPrice, truckPrice);
document.writeln(`${maxPrice}<hr>`);

//
const minPrice = Math.min(bikePrice, carPrice, truckPrice);
document.writeln(`${minPrice}<hr>`);

//
const allGoods = bikePrice + carPrice + truckPrice
const summPrice = allGoods;
document.writeln(`${summPrice}<hr>`);

//
//

const summInt = Math.floor(bikePrice) + Math.floor(carPrice) + Math.floor(truckPrice);
document.writeln(`${summInt}<hr>`);

//
const roundedSumm = Math.round(summPrice / 100) * 100
document.writeln(`${roundedSumm}<hr>`);

//
let message = "";
const isEven = summInt % 2 == 0;
if (isEven) {
    message = "even<hr>";
}
else {
    message = "odd<hr>";
}
document.writeln(message);

//
const changeFrom500 = 500 - summPrice;
document.writeln(`${changeFrom500}<hr>`);

//
const average = (summPrice / [bikePrice.toFixed, carPrice.toFixed, truckPrice].length).toFixed(2);
document.writeln(`${average}<hr>`);

//
const trainPrice = 987.286
const discount = Math.random().toFixed(2);

const cost = trainPrice / 2;
const priceDiscount = (trainPrice * discount).toFixed(2);
const profit = cost - priceDiscount
document.writeln(`price: ${trainPrice}$, discount: ${discount * 100} %, new price for customer: ${priceDiscount}$, profit: ${profit.toFixed(2)}$`)




document.writeln(`<h3>Advanced Task</h3> 
Max price: ${maxPrice};<br>
Min price: ${minPrice};<br>
All goods price: ${summPrice};<br>
Sum of rounded integers: ${summInt};<br>
Sum, rounded to low. 100: ${roundedSumm};<br>
Sum of rounded integers is ${message};<br>
Change for 500: ${changeFrom500};<br>
Average price: ${average};<br>`)

