
//currently the variables are only adjusted and tweaked in js file
let yearsInvested, startAmount, annualContributions, divYield, ytdGrowth;
const yearEnd = []; //by year
const yearEndFormatted = []; //format the array with commas
yearsInvested = 20; //years i will keep invested 
startAmount = 100000; //amount i put in 
annualContributions = 25000; //amount i will put in every year 
divYield = 0.0025; //dividend yield - 0.25%
ytdGrowth = 0.10; //yearly growth i expect - 50%

//so once we have these numbers, we will pass 5 arguments into a function
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
        console.log(`temp before formatting is ${temp}`);
        temp = temp.toLocaleString()
        console.log(`temp after formatting is ${temp}`);
        yearEndFormatted.push(temp);
      
    }
    console.log(yearEndFormatted);
}

let count = "1";
const date = new Date();
let year = date.getFullYear();
for(let i = 0; i < yearEndFormatted .length; i++){
    document.getElementById('calculatedResult').innerHTML //add html
    += 
    `<div class = "result">
        <span class = "year">year: 
            <span class = "count">${count}</span> | <span class = "fullYear">${year}</span></span>
            <br>
            <br>
        <span class = "numbers">${yearEndFormatted[i]}</span>
        <br>
    </div>`;
    count++;
    year++;
}