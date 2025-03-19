

let yearsInvested, startingAmount, annualContributions, dividendYield, ytdGrowth;
const yearEndTotal = [];
yearsInvested = 20; //years i will keep invested 
startingAmount = 100000; //amount i put in 
annualContributions = 25000; //amount i will put in every year 
dividendYield = 0.0025; //dividend yield - 0.25%
ytdGrowth = 0.10; //yearly growth i expect - 50%

//so once we have these numbers, we will pass 5 arguments into a function
calculateTotalReturns();

//store the for loop's result into yearEndTotal
function calculateDividends(currentAmount){
    let dividendsGains = (dividendYield * currentAmount); 
    return dividendsGains;
}

function calculateTotalReturns(){
    let currentAmount = startingAmount;   
    for(let i = 0; i < yearsInvested; i++){ 
        currentAmount = Math.round((currentAmount * ytdGrowth) + (calculateDividends(currentAmount)) + currentAmount) + annualContributions;
        yearEndTotal.push(currentAmount);
    }
    console.log(yearEndTotal); //console log the array of strings
}

let count = "1";
const date = new Date();
let year = date.getFullYear();
for(let i = 0; i < yearEndTotal.length; i++){
    document.getElementById('calculatedResult').innerHTML 
    += `<div class = "result"><span class = "year">year: <span class = "count">${count}</span> | 
    <span class = "fullYear">${year}</span></span><br><br>
    <span class = "numbers">${yearEndTotal[i]}</span><br></div>`;
    count++;
    year++;
}


addComma();
    
    
function addComma(){
    let replacementNum;
    let x, y, z;
    let newArray = [];
    for(let i = 0; i < yearEndTotal.length; i++){
        replacementNum = toString(yearEndTotal[i]);
        console.log(typeof(replacementNum));
        console.log(replacementNum);
        let interval = 3;
        for(let i = 0; i < replacementNum.length; i++){
            for(let i = 0; i < 3; i++){
                x = yearEndTotal[i];
                console.log(`x is ${x}`);
                newArray.push(x);
             }
        }
        //yearEndTotal[i].push(replacementNum);
    }
}


