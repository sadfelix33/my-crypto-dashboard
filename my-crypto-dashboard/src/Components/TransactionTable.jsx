// components/TransactionsTable.jsx
const transactions = [
  {
    id: 1,
    type: "Deposit",
    amount: "+$500",
    date: "2025-09-01",
    status: "Completed",
  },
  {
    id: 2,
    type: "Withdraw",
    amount: "-$200",
    date: "2025-09-03",
    status: "Pending",
  },
  {
    id: 3,
    type: "Swap",
    amount: "0.05 BTC → 1500 USDT",
    date: "2025-09-05",
    status: "Completed",
  },
];

export default function TransactionsTable(
    { transactions}) {
  return (
<div className="bg-black/60 backdrop-blur-md p-4 rounded-xl overflow-hidden">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Recent Transactions
      </h2>
      <table className="w-full border-collapse text-gray-800">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="p-2">Type</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b last:border-0">
              <td className="p-2 font-medium">{tx.type}</td>
              <td className="p-2">{tx.amount}</td>
              <td className="p-2">{tx.date}</td>
              <td
                className={`p-2 font-semibold ${
                  tx.status === "Completed"
                    ? "text-green-600"
                    : tx.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {tx.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
