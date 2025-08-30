// import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
