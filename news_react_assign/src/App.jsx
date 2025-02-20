import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Register from "./components/register/Register";
import { Login } from "./components/login/Login";
import { Row } from "react-bootstrap";
import { BrowserRouter, Route, Router } from "react-router";
import { Routes } from "react-router";
import DashBoard from "./components/dashboard/Dashboard";
import Drop_news from "./components/drop_news/Drop_news";
import AddNewss from "./components/drop_news/Addnewss";
import Searchnews from "./components/drop_news/Searchnews";
import HomePage from "./components/homepage/HomePage";


// import { Searchnews } from "./components/drop_news/Searchnews";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Row>
        <Header />
      </Row>

      <Row className="containerStyle">
        <Routes>
          <Route path="/" Component={DashBoard}></Route>

          

          <Route path="/drop_news" Component={Drop_news}>
            {/* <Route path="/search_news" Component={Searchnews}></Route> */}
          </Route>
        <Route path="/Addnewss" Component={AddNewss}></Route>

        <Route path="/Searchnews" Component={Searchnews}></Route>

          <Route path="/login" Component={Login}></Route>

          <Route path="/homepage" Component={HomePage}></Route>

          <Route path="/register" Component={Register}></Route>


          
        </Routes>
      </Row>

      <Row>
        <Footer></Footer>
      </Row>
    </>
  );
}

export default App;
