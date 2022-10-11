import React, { useContext } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from "recharts";

import { TopicsContext } from "./Root";

const Statistics = () => {
  const topicsData = useContext(TopicsContext);
  const data = topicsData.data;
  console.log(data);
  return (
    <div className="flex justify-center items-center bg-gray-300 py-5">
      <LineChart
        width={380}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Statistics;
