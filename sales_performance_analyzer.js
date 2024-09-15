const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] },
];

//1. Create a Function to Calculate Average Sales

function calculateAverageSales(sales){
    const totalSales = sales.reduce((sum, sale) => sum + sale, 0);
    return totalSales / sales.length;
}

//2. Create a Function to determine performance rating

function determinePerformanceRating(averageSales){
    if (averageSales > 10000){
        return `Excellent!`;
    } else if (averageSales >= 7000){
        return 'Good!';
    } else if (averageSales > 4000){
        return 'Satisfactory';
    } else {
        return 'Needs Improvement';
    }
}

//3. Create a function to identify top and bottom performers

function findTopAndBottomPerformers(salesData){
    const sortedData = salesData.sort((a, b) => {
        const totalSalesA = a.sales.reduce((sum, sale) => sum+sale,0);
        const totalSalesB = b.sales.reduce((sum, sale) => sum+sale,0);
        return totalSalesB-totalSalesA;
    });
    const topPerformer = sortedData[0];
    const bottomPerformer = sortedData[sortedData.length - 1];

    return { topPerformer, bottomPerformer}
}

//4. Generate Performance Report

function generatePerformanceReport(salesData){
    salesData.forEach(person => {
        const averageSales = calculateAverageSales(person.sales);
        const rating = determinePerformanceRating(averageSales);
        console.log(`${person.name}'s average sales: $${averageSales.toFixed(2)} (${rating})`);
    });
    const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salesData);
    console.log(`Top Performer: ${topPerformer.name} with total sales of $${topPerformer.sales.reduce((sum, sale) => sum + sale,0)}`);
    console.log(`Bottom Performer: ${bottomPerformer.name} with total sales of $${bottomPerformer.sales.reduce((sum, sale) => sum + sale,0)}`);     
}

console.log(generatePerformanceReport(salesData));