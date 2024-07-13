import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
      <div className="fixed">
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
