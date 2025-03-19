
//ex

let yearsInvested, startingAmount, annualContributions, dividendYield, ytdGrowth;
const yearEndTotal = [];
yearsInvested = 30; //years i will keep invested 
startingAmount = 100000; //amount i put in 
annualContributions = 25000; //amount i will put in every year 
dividendYield = 0.0025; //dividend yield - 0.25%
ytdGrowth = 0.25; //yearly growth i expect - 50%

//so once we have these numbers, we will pass 5 arguments into a function
calculateTotalReturns();

//store the for loop's result into yearEndTotal
function calculateDividends(currentAmount, netQuarterlyGain){
    let dividendsGains = (dividendYield * currentAmount); 
    return dividendsGains;
}

function calculateTotalReturns(){
    let currentAmount = startingAmount + annualContributions;   
    let netQuarterlyGains = (currentAmount - startingAmount) / 4; console.log(`netQuarterlyGain: ${netQuarterlyGains}`);
    console.log(`startingAmount: ${startingAmount}`); console.log(`annualContributions: ${annualContributions}`); console.log(`currentAmount: ${currentAmount}`); 
    //alright, we will invest for 10 years, so we will likely call this function 10 times. let's set up it's layout.
    //let's make a for loop that loops for as long as the years we invest.
    for(let i = 0; i < yearsInvested; i++){ 
        //let's write the mathematical formula that will be used to calculate the returns of the asset appreciation every year
        //the formula we can use is (startingAmount)
        currentAmount = Math.round((currentAmount * ytdGrowth) + (calculateDividends(currentAmount)) + currentAmount);
        //                               150000     x    .25         +             3750          +           150000
        yearEndTotal.push(currentAmount);
    }
    console.log(yearEndTotal);
}

let count = "1";
for(let i = 0; i < yearEndTotal.length; i++){
    document.getElementById('calculatedResult').innerHTML 
    += `<div class = "result"><span class = "year">Year: ${count}</span><br>${yearEndTotal[i]}<br></div>` ;
    count++;
}

// create the graph
