import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export function GeoDash() {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    fetch("https://csms-backend.vercel.app/api/language-schools")
      .then((response) => response.json())
      .then((data) => {
        const countries = {};
        data.forEach((school) => {
          countries[school.country] = (countries[school.country] || 0) + 1;
        });

        const chartData = [
          ["Country", "Number of Schools"],
          ...Object.entries(countries).map(([country, count]) => [
            country,
            count,
          ]),
        ];
        setSchoolData(chartData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = schoolData[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={schoolData}
    />
  );
}
