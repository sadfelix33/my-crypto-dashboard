// // components/BalanceChart.jsx
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Jan", balance: 4000 },
//   { name: "Feb", balance: 3000 },
//   { name: "Mar", balance: 5000 },
//   { name: "Apr", balance: 4780 },
//   { name: "May", balance: 5890 },
//   { name: "Jun", balance: 4390 },
//   { name: "Jul", balance: 6490 },
// ];

// export default function BalanceChart() {
//   return (
//     <div className="bg-white p-4 rounded-2xl shadow-md">
//       <h2 className="text-lg font-semibold mb-4">Balance Overview</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Line
//             type="monotone"
//             dataKey="balance"
//             stroke="#6366f1"
//             strokeWidth={3}
//             dot={{ r: 5 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
// components/BalanceChart.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BalanceChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch last 7 days of Bitcoin prices
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: 7,
            },
          }
        );

        // Transform API data into chart-friendly format
        const prices = response.data.prices.map((item) => {
          const date = new Date(item[0]);
          return {
            name: date.toLocaleDateString("en-US", { weekday: "short" }), // e.g. Mon, Tue
            balance: item[1], // Bitcoin price in USD
          };
        });

        setData(prices);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Bitcoin Price (Last 7 Days)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

