function Navbar({ toggleSidebar }) {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5 backdrop-blur-lg">
          <button
        onClick={toggleSidebar}
        className="md:hidden text-white hover:text-purple-400"
      >
        ☰
      </button>

      <input
        type="text"
        placeholder="Search..."
        className="px-7 py-2 rounded-lg bg-white/10 focus:outline-none"
      />   
       <h2 className="text-lg font-bold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">U</span>
      </div>
    </nav>
  );
}

export default Navbar;
