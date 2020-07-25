const bikePrice = 15.678;
const carPrice = 90.2345;
const truckPrice = 123.965;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(bikePrice, carPrice, truckPrice);
document.writeln(`${maxPrice}<hr>`);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(bikePrice, carPrice, truckPrice);
document.writeln(`${minPrice}<hr>`);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const allGoods = bikePrice + carPrice + truckPrice
const summPrice = allGoods;
document.writeln(`${summPrice}<hr>`);

//Відкиньте копійки у всіх товарів :), потім – складіть цілу частину вартості кожного товару між собою.
//Округлення використовувати в МЕНЬШУ сторону.

const summInt = Math.floor(bikePrice) + Math.floor(carPrice) + Math.floor(truckPrice);
document.writeln(`${summInt}<hr>`);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const roundedSumm = Math.round(summPrice / 100) * 100
document.writeln(`${roundedSumm}<hr>`);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let message = "";
const isEven = summInt % 2 == 0;
if (isEven) {
    message = "even<hr>";
}
else {
    message = "odd<hr>";
}
document.writeln(message);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const changeFrom500 = 500 - summPrice;
document.writeln(`${changeFrom500}<hr>`);

//Виведіть середнє значення цін, округлене до другого знаку після коми
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
${summPrice}`)

