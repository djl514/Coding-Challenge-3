//1. Create a Function to Calculate Average Sales
const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] },
];
console.log(salesData[1].sales);

function calculateTotalSales(num){
    let totalSales = salesData[num].sales.reduce((total, sales) => total + sales, 0);
    return totalSales;
}

function calculateAverageSales(num){
    return calculateTotalSales(num)/salesData[num].sales.length;
}

console.log(calculateAverageSales(0));

//2. Create a Function to determine performance rating

function determinePerformanceRating(num1){
    if (calculateAverageSales(num1) > 10000){
        return console.log(`Excellent!`);
    } else if (calculateAverageSales(num1) > 7000 
    && calculateAverageSales(num1) < 10000){
        return console.log('Good!');
    } else if (calculateAverageSales(num1) > 4000 
    && calculateAverageSales(num1) < 7000){
        return console.log('Satisfactory');
    } else {
        return console.log('Needs Improvement');
    }
}

console.log(determinePerformanceRating(0));

//3. Create a function to identify top and bottom performers

// Had to tank this, unable to fully complete the final tasks.