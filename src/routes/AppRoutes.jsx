import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Notes from "../pages/Notes";
import Summarizer from "../pages/Summarizer";
import Quiz from "../pages/Quiz";
import Chat from "../pages/Chat";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/summarizer" element={<Summarizer />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;