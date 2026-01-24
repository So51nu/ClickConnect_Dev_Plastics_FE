// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/AboutUs";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import Gallery from "./pages/Gallery";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* ✅ Default route */}
//         <Route path="/" element={< Home/>} />
      
       
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/gallery" element={<Gallery />} /> 
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import Login from "./pages/Login";
import AdminDashboard from "./pages/Admindashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Default route */}
        <Route path="/" element={< Home/>} />
      
       
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
