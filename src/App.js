import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Input from "./components/Input";
import Data from "./components/Data";

const App = () => {
  return (
    <Router>
      <div className="p-5">
        <nav className="flex justify-end mb-7 mx-10 px-10">
          <Link
            to="/"
            className="border-2 p-1 rounded-2xl bg-blue-300 hover:bg-blue-500 mr-8"
          >
            Input Page
          </Link>
          <Link
            to="/view-data"
            className="border-2 p-1 rounded-2xl bg-green-300 hover:bg-green-500"
          >
            View Data Page
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/view-data" element={<Data />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
