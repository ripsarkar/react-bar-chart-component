import React, { useState } from 'react';

const DynamicBarChart = () => {
    const [data, setData] = useState([50, 100, 30, 80, 120]);

    const addData = () => {
        const newValue = Math.floor(Math.random() * 150);
        setData([...data, newValue]);
    };

    const maxValue = Math.max(...data);
    const barWidth = 50;
    const barSpacing = 20;
    const chartHeight = 150;

    return (
        <div>
            <svg width={400} height={200}>
                {/* X-Axis */}
                <line x1={50} y1={chartHeight + 30} x2={350} y2={chartHeight + 30} stroke="black" />
                {/* Y-Axis */}
                <line x1={50} y1={30} x2={50} y2={chartHeight + 30} stroke="black" />
                {/* Marks and Labels for X-Axis */}
                {data.map((_, index) => {
                    const x = 50 + index * (barWidth + barSpacing);
                    return (
                        <g key={index}>
                            <line x1={x + barWidth / 2} y1={chartHeight + 28} x2={x + barWidth / 2} y2={chartHeight + 30} stroke="black" />
                            <text x={x + barWidth / 2 - 10} y={chartHeight + 50} fontSize="12">
                                {`Data ${index + 1}`}
                            </text>
                        </g>
                    );
                })}
                {/* Marks and Labels for Y-Axis */}
                {[0, 30, 60, 90, 120].map((value, index) => {
                    const y = chartHeight + 30 - (value / maxValue) * chartHeight;
                    return (
                        <g key={index}>
                            <line x1={45} y1={y} x2={50} y2={y} stroke="black" />
                            <text x={15} y={y + 5} fontSize="12">{value}</text>
                        </g>
                    );
                })}
                {/* Bars */}
                {data.map((value, index) => {
                    const barHeight = (value / maxValue) * chartHeight;
                    const x = 50 + index * (barWidth + barSpacing);
                    const y = chartHeight + 30 - barHeight;

                    return (
                        <rect
                            key={index}
                            x={x}
                            y={y}
                            width={barWidth}
                            height={barHeight}
                            fill="teal"
                        />
                    );
                })}
            </svg>
            {/* <button onClick={addData}>Add Random Data</button> */}
        </div>
    );
};

export default DynamicBarChart;