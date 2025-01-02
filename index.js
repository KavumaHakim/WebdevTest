const insert1 = document.getElementById('insert-1');
const insert2 = document.getElementById('insert-2');
const insert3 = document.getElementById('insert-3');
const insert4 = document.getElementById('insert-4');
const insert5 = document.getElementById('insert-5');
const insert6 = document.getElementById('insert-6');
const insert7 = document.getElementById('insert-7');
const insert8 = document.getElementById('insert-8');
const insert9 = document.getElementById('insert-9');
const insertSin = document.getElementById('insert-sin');
const insertCos = document.getElementById('insert-cos');
const insertTan = document.getElementById('insert-tan');
const insertSqt = document.getElementById('insert-sqrt');
const insertPlus = document.getElementById('insert-plus');
const insertMinus = document.getElementById('insert-minus');
const insertDivide = document.getElementById('insert-divide');
const insertMultiply = document.getElementById('insert-multiply');
const insertDot = document.getElementById('insert-dot');
const insertExp = document.getElementById('insert-exp');
const Clear = document.getElementById('clear');
const equal = document.getElementById('equals');


const answerBox = document.getElementById('answer');

insert1.addEventListener('click', () => {
    answerBox.value += "1"
})

insert2.addEventListener('click', () => {
    answerBox.value += "2"
})
insert3.addEventListener('click', () => {
    answerBox.value += "3"
})
insert4.addEventListener('click', () => {
    answerBox.value += "4"
})
insert5.addEventListener('click', () => {
    answerBox.value += "5"
})
insert6.addEventListener('click', () => {
    answerBox.value += "6"
})
insert7.addEventListener('click', () => {
    answerBox.value += "7"
})
insert8.addEventListener('click', () => {
    answerBox.value += "8"
})
insert9.addEventListener('click', () => {
    answerBox.value += "9"
})
insertSin.addEventListener('click', () => {
    answerBox.value += "Sin "
})
insertCos.addEventListener('click', () => {
    answerBox.value += "Cos "
})
insertTan.addEventListener('click', () => {
    answerBox.value += "Tan "
})
insertSqt.addEventListener('click', () => {
    answerBox.value += "Sqrt"
})
insertExp.addEventListener('click', () => {
    answerBox.value += "^"
})
insertPlus.addEventListener('click', () => {
    answerBox.value += "+"
})
insertMinus.addEventListener('click', () => {
    answerBox.value += "-"
})
insertMultiply.addEventListener('click', () => {
    answerBox.value += "*"
})
insertDivide.addEventListener('click', () => {
    answerBox.value += "/"
})
insertDot.addEventListener('click', () => {
    answerBox.value += "."
})
Clear.addEventListener('click', () => {
    answerBox.value = ""
})


/*TODO : 
    ADD TRIG FUNCTIONALITY
    ADD SQUARE ROOT
    ADD AUTO CLEAR INPUT BOX WHEN NEW VALUES ARE ADDED AFTER PREVIOUS CALCULATION
*/
equal.addEventListener('click', () => {
    answerBox.value = eval(answerBox.value)
})