import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import React from "react";

function App() {
  return (
      <Router>
        <div className="app">
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 text-white padding">
                <Sidebar />
              </div>
              <div className="col-10 mt-3 padding-inferior">
                <Content />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
  );
}
export default App;
