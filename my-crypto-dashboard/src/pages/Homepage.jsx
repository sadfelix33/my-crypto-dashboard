import { useState } from "react";
import BalanceChart from "../Components/BalanceChart";
import Navbar from "../Components/Navbar";
import QuickActions from "../Components/QuickActions";
import Sidebar from "../Components/Sidebar";
import TransactionTable from "../Components/TransactionTable";
import Walletcards from "../Components/Walletcard";





function HomePage() {
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Deposit", amount: "+$500", date: "2025-09-01", status: "Completed" },
    { id: 2, type: "Withdraw", amount: "-$200", date: "2025-09-03", status: "Pending" },
    { id: 3, type: "Swap", amount: "0.05 BTC → 1500 USDT", date: "2025-09-05", status: "Completed" },
  ]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to add a new transaction
  const addTransaction = (type) => {
    const newTx = {
      id: transactions.length + 1,
      type,
      amount:
        type === "Deposit"
          ? "+$300"
          : type === "Withdraw"
          ? "-$150"
          : "0.01 BTC → 400 USDT",
      date: new Date().toISOString().split("T")[0],
      status: type === "Withdraw" ? "Pending" : "Completed",
    };

    setTransactions([newTx, ...transactions]);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white">   
    
      {/* Sidebar - hidden on mobile, shows on md+ */}
      <div className="">
    <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
       <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        {/* Dashboard Sections */}
  
  {/* Table spans 2 columns on large screens */}
  <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
  {/* Wallet Card */}
  <section className="col-span-1 lg:col-span-2">
    <Walletcards />
  </section>

  {/* Transaction Table (takes 2 cols on desktop) */}
  <section className="col-span-1 lg:col-span-2">
    <TransactionTable transactions={transactions} />
  </section>

  {/* Quick Actions (stacked on mobile/tablet, beside Wallet on desktop) */}
  <section className="col-span-1 lg:col-span-1 self-end">
    <QuickActions addTransaction={addTransaction} />
  </section>

  {/* Balance Chart (stacked on mobile/tablet, 2 cols under table on desktop) */}
  <section className="col-span-1 lg:col-span-3">
    <BalanceChart />
  </section>
</main>

        
      </div>
    </div>
  );
}

export default HomePage;
