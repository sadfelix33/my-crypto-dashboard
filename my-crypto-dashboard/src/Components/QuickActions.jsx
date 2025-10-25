// components/QuickActions.jsx



export default function QuickActions({ addTransaction }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mb-6 text-gray-800 transition hover:translate-y-2">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="flex gap-4">
        <button
          onClick={() => addTransaction("Deposit")}
          className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
        >
          Deposit
        </button>
        <button
          onClick={() => addTransaction("Withdraw")}
          className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          Withdraw
        </button>
        <button
          onClick={() => addTransaction("Swap")}
          className="px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition"
        >
          Swap
        </button>
      </div>
    </div>
  );
}
