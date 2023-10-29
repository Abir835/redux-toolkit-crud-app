import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navber from "../layouts/Navber";
import AddBook from "../features/books/AddBooks";
import BooksView from "../features/books/BooksView";
import Footer from "../layouts/Footer";

const Index = () => {
    return <BrowserRouter>
    <Navber/>
    <main>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/add-book" element={<AddBook/>}/>
            <Route path="/show-book" element={<BooksView/>}/>
            <Route path="*" element={<Error/>} />
        </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
}

export default Index;