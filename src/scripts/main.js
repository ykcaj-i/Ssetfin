
/**v.0.1**/
/**currently the variables are only adjusted and tweaked in js file**/
let yearsInvested, startAmount, annualContributions, divYield, ytdGrowth;
const yearEnd = []; //by year
const yearEndFormatted = []; //format the array to be prettier
yearsInvested = 20; //years invested 
startAmount = 100000; //starting amount of capital
annualContributions = 25000; //amount contributted every year
divYield = 0.0025; //dividend yield / apy interest .. eg - 0.25%
ytdGrowth = 0.10; //ytd growth (end of year) .. eg - 50% 

//so once we have these numbers, execute function
calculateTotalReturns();

//store the for loop's result into yearEndTotal
function calculateDividends(currentAmount){
    let dividendsGains = (divYield * currentAmount); 
    return dividendsGains;
}

function calculateTotalReturns(){
    let currentAmount = startAmount;   
    for(let i = 0; i < yearsInvested; i++){ 
        currentAmount = Math.round((currentAmount * ytdGrowth) + (calculateDividends(currentAmount)) + currentAmount) + annualContributions;
        yearEnd.push(currentAmount);
    }
    console.log(yearEnd); //console log the array of strings
    formatArray(); // call the comma function
}

function formatArray(){
    let temp;
    for(let i = 0; i < yearEnd.length; i++){
        temp = yearEnd[i];
        temp = temp.toLocaleString()
        yearEndFormatted.push(temp);
      
    }
    console.log(yearEndFormatted);
}

let count = "1";
const date = new Date();
let year = date.getFullYear();
for(let i = 0; i < yearEndFormatted .length; i++){
    document.getElementById('calculatedResult').innerHTML += //add html
    `<div class = "result">
        <span class = "year">year: 
            <span class = "count">${count}</span>&nbsp;|&nbsp;<span class = "fullYear">${year}</span></span>
            <br>
            <br>
        <span class = "numbers">$&nbsp;${yearEndFormatted[i]}</span>
        <br>
    </div>`;
    count++;
    year++;
}