

let yearsInvested, startAmount, annualContributions, divYield, ytdGrowth;
const yearEnd = []; //by year
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
}

let count = "1";
const date = new Date();
let year = date.getFullYear();
for(let i = 0; i < yearEnd.length; i++){
    document.getElementById('calculatedResult').innerHTML 
    += `<div class = "result">
    <span class = "year">year: 
        <span class = "count">${count}</span> | 
            <span class = "fullYear">${year}</span>
    </span><br><br>
    <span class = "numbers">${yearEnd[i]}</span><br></div>`;
    count++;
    year++;
}


addComma();
    
/*    
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
*/

function addComma(){
    let placeholder; 
    let count = 0;
    let comma = ",";
    for(let i = 0; i < yearEnd.length; i++){ //loop the entire yearEnd array
        placeholder = yearEnd[i];
        console.log(`placeholder is ${placeholder}`);
        
    }
    /*
    let count = 0;
    let string
    for(let i = 0; i < String.length; i++){

        count++;
    }
        */
}