let summ = null;
let getN = +prompt("give me N number");
while (isNaN(getN) || !Number.isInteger(getN) || getN == 0) {
    getN = +prompt("please, give me a correct number");
}
document.writeln(`N = ${getN}<hr>`)
//console.log(getN);

let getM = +prompt("give me M number (it has to be bigger than previous)");
while (isNaN(getM) || !Number.isInteger(getM) || getN > getM) {
    getM = +prompt("please, give me a correct number");
}
//console.log(getM);
document.writeln(`M = ${getM}<hr>`)
const confirmFromUser = confirm("I'll summarize all numbers. Should I skip even numbers?");

if (!confirmFromUser) {
    for (getN; getN <= getM; getN++) {
        summ += getN;
        //console.log(summ)
    }
}
else if (confirmFromUser) {
    const isEven = getN % 2 == 0;
    console.log(`${isEven}`)
    if (!isEven) {
        for (getN; getN <= getM; getN += 2) {
            summ += getN;
            //console.log(summ);
        }
    }
    else if (isEven) {
        let getN_ = getN + 1;
        for (getN_; getN_ <= getM; getN_ +=2) {
            summ += getN_;
            //console.log(summ);
        }
    }
}

document.writeln(`<hr><b>Result:</b> ${summ}<hr>`)