let intervalnum = document.querySelector(".interval");
let counter = intervalnum.textContent;
let counter2 = counter.replace(/[","]/g , "");
console.log(counter2);
let transaction = Number(counter2) + 1;
// console.log(transaction);
// console.log(typeof counter);


setInterval(()=> {
    // console.log(transaction+=3);
    intervalnum.textContent=transaction+=3;
    
}, 2000);
