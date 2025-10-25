import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Navbar from "./Components/Navbar";
import HomePage from "./pages/Homepage";





function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<HomePage/>} />
          {/* <Route path= "/navbar" element={<Navbar/>} /> */}
      </Routes>
    </BrowserRouter>

        
   </>
  );
}

export default App;
