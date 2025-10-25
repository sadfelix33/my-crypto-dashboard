function Walletcards() {
  return (
    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-xl shadow-lg">
        <h2 className="text-sm">Total Balance</h2>
        <p className="text-2xl font-bold">$24,300</p>
      </div>
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-xl shadow-lg">
        <h2 className="text-sm">BTC Balance</h2>
        <p className="text-2xl font-bold">0.523 BTC</p>
      </div>
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-xl shadow-lg">
        <h2 className="text-sm">ETH Balance</h2>
        <p className="text-2xl font-bold">3.1 ETH</p>
      </div>
      <div className="bg-gradient-to-r from-pink-500 to-red-600 p-4 rounded-xl shadow-lg">
        <h2 className="text-sm">24h Change</h2>
        <p className="text-2xl font-bold">+4.2%</p>
      </div>
    </div>
  );
}

export default Walletcards;
