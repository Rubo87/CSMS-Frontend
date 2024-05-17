import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

export function ChartDash() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://csms-backend.vercel.app/api/language-schools');
      const data = await response.json();
  
      // Check if data is an array and not empty
      if (!Array.isArray(data) || data.length === 0) {
        console.error('Invalid or empty data returned:', data);
        return;
      }
  
      // Group data by year
      const salesByYear = {};
      const expensesByYear = {};
  
      data.forEach(school => {
        const year = school.year.toString();
        if (!salesByYear[year]) {
          salesByYear[year] = 0;
          expensesByYear[year] = 0;
        }
        const yearlySales = school.users * 26; // Sales: 26€ per user per year
        const yearlyExpenses = school.users * 5; // Expenses: 5€ per user per year
        salesByYear[year] += yearlySales;
        // Adjust expenses not to exceed sales
        expensesByYear[year] += Math.min(yearlyExpenses, yearlySales);
      });
  
      // Prepare chart data
      const chartData = [['Year', 'Sales', 'Expenses', 'Profit']];
      Object.keys(salesByYear).forEach(year => {
        const profit = salesByYear[year] - expensesByYear[year];
        chartData.push([year, salesByYear[year], expensesByYear[year], profit]);
      });
  
      setChartData(chartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={chartData}
      options={{
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit per Year',
        hAxis: {
          title: 'Year',
        },
        vAxis: {
          title: 'Amount (€)',
          format: 'currency',
        },
      }}
    />
  );
}
