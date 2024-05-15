import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const PieDash = () => {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://csms-backend.vercel.app/api/language-schools");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSchoolData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Calculate the number of schools per country
  const schoolsPerCountry = schoolData.reduce((acc, curr) => {
    acc[curr.country] = (acc[curr.country] || 0) + 1;
    return acc;
  }, {});

  // Convert the object into an array of arrays
  const chartData = Object.entries(schoolsPerCountry).map(([country, count]) => [country, count]);

  // Add the header row
  chartData.unshift(["Country", "Number of Schools"]);

  const options = {
    title: "Number of Schools per Country",
    is3D: true,
  };

  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};
