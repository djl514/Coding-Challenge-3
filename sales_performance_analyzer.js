//1. Create a Function to Calculate Average Sales
const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] },
];
console.log(salesData[1].sales);

function calculateAverageSales(num){
    let totalSales = salesData[num].sales.reduce((total, sales) => total + sales, 0);
    return totalSales/salesData[num].sales.length;
}

console.log(calculateAverageSales(3));

//2. Create a Function to determine performance rating

function determinePerformanceRating(num){
    if (calculateAverageSales(num) > 10000){
        console.log(`Excellent!`);
    } else if (calculateAverageSales(num) > 7000 
    && calculateAverageSales(num) < 10000){
        console.log('Good!');
    } else if (calculateAverageSales(num) > 4000 
    && calculateAverageSales(num) < 7000){
        console.log('Satisfactory');
    } else {
        console.log('Needs Improvement');
    }
}

console.log(determinePerformanceRating(3));
