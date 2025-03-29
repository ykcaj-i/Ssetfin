
/**v.0.1**/
/**currently the variables are only adjusted and tweaked in js file**/
let yearsInvested, startAmount, annualContributions, divYield, ytdGrowth;
const yearEnd = []; //by year
const yearEndNums = []; //format the array to be prettier
yearsInvested = 20; //years invested 
startAmount = 100000; //starting amount of capital
annualContributions = 25000; //amount contributted every year
divYield = 0.0025; //dividend yield / apy interest .. eg - 0.25%
ytdGrowth = 0.10; //ytd growth (end of year) .. eg - 50% 


calculateTotalReturns();

//calculate dividends
function calculateDividends(currentAmount){
    let dividendsGains = (divYield * currentAmount); 
    return dividendsGains;
}

//primary calculator
function calculateTotalReturns(){
    let currentAmount = startAmount;   
    for(let i = 0; i < yearsInvested; i++){ 
        currentAmount = Math.round((currentAmount * ytdGrowth) + (calculateDividends(currentAmount)) + currentAmount) + annualContributions;
        yearEnd.push(currentAmount.toLocaleString()); //push currentAmount as strings
        yearEndNums.push(currentAmount); //push currentAmount as numbers
    }
    console.log(yearEnd); //console log the array of strings
    console.log(yearEndNums);
}

//print the nth year count, nth full year, and $ amount
const date = new Date();
let year = date.getFullYear();
let count = "1";
for(let i = 0; i < yearEnd.length; i++){
    document.getElementById('calculatedResult').innerHTML += //add html
    `<div class = "result">
        <span class = "year">year: 
            <span class = "count">${count}</span>&nbsp;|&nbsp;<span class = "fullYear">${year}</span></span>
            <br>
            <br>
        <span class = "numbers">$ ${yearEnd[i]}</span>
        <br>
    </div>`;
    count++;
    year++;
}

