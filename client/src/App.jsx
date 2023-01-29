import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from "./assets/logo.png";
import OpenAi from "./assets/logo.svg";
import { Home, CreatePost } from "./page";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-zinc-900 text-white sm:px-8 px-4 py-4 border-b-2 border-b-teal-600">
      <Link to="/" className="flex gap-2 items-center font-bold">
        <img src={Logo} alt="logo" className="w-8 object-cover" />
        IMAGINE-E
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-teal-600 text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-zinc-900 min-h-[calc(100vh-94px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <footer className="bg-zinc-900 flex items-center justify-center ">
      <span className="text-gray-500 text-sm text-center ">
        Powerade by OpenAi
      </span>
    </footer>
  </BrowserRouter>
);

export default App;
