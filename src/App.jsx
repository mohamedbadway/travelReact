import {  Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
 import Header from "./components/Common/Header/Header";
 import Footer from "./components/Common/Footer/Footer";

export default function App() {
  return (
    <>
    <Header/>

     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

