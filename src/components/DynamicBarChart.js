import React, { useState } from 'react';

const DynamicBarChart = () => {
    const [data, setData] = useState([50, 100, 30, 80, 120]);

    const addData = () => {
        // Add random data to the chart
        const newValue = Math.floor(Math.random() * 150);
        setData([...data, newValue]);
    };

    const maxValue = Math.max(...data);

    return (
        <div>
            <svg width={400} height={200}>
                {data.map((value, index) => {
                    const barHeight = (value / maxValue) * 150; // Scale based on maxValue
                    const barWidth = 50;
                    const barSpacing = 10;
                    const x = index * (barWidth + barSpacing);
                    const y = 150 - barHeight;

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
            <button onClick={addData}>Add Random Data</button>
        </div>
    );
};

export default DynamicBarChart;