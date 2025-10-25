import React from "react";

function Sidebar({ open, setOpen }) {
  return (
    <div
      className={`fixed md:static top-0 left-0 h-screen w-64 bg-black/30 backdrop-blur-md p-6 transform transition-transform duration-300 z-50
      ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      {/* Close button only on mobile */}
      <button
        onClick={() => setOpen(false)}
        className="md:hidden mb-6 text-white hover:text-purple-400"
      >
        ✕
      </button>
      <div className="p-6 text-2xl font-bold">CryptoDash</div>
      <nav className="flex flex-col px-4 space-y-4">
        <a href="#" className="block p-2 rounded hover:bg-white/10">Dashboard</a>
        <a href="#" className="block p-2 rounded hover:bg-white/10">Wallet</a>
        <a href="#" className="block p-2 rounded hover:bg-white/10">Transactions</a>
        <a href="#" className="block p-2 rounded hover:bg-white/10">Settings</a>
      </nav>
    </div>
  );
}

export default Sidebar;
