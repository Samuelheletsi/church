// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Testimonies from "./pages/Testimonies";
import Pastors from "./pages/Pastors";
import Fellowships from "./pages/Fellowships";
import Leaders from "./pages/Leaders";

function App() {
  return (
    <Router>
      {/* Top navigation */}
      <Navbar />

      {/* Routes for pages */}
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/pastors" element={<Pastors />} />
          <Route path="/fellowships" element={<Fellowships />} />
          <Route path="/leaders" element={<Leaders />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
