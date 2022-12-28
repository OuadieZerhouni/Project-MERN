import "./App.css";
import React from "react";
import RegisterForm from "./Routes/RegisterForm";
import DashBoard from "./Routes/DashBoard";
import Welcome from "./Routes/Welcome";
import Meet from "./Routes/Meet";

import { Route, Routes,BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>My App</h1>
        <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/Meet" element={<Meet />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
