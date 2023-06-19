import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Components
import Home from "./pages/home/home";
import Comment from "./components/Feed2/Comment";
import Comment1 from "./components/FeedBack/Comment/Comment1";
import Comment2 from "./components/FeedBack/Comment/Comment2";
import Comment3 from "./components/FeedBack/Comment/Comment3";
import Hosting from "./pages/hosting/hosting";
import Services from "./pages/Services/Services";
import Princing from "./pages/Pricing/Princing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Comment1 />} />
            <Route path="comment2" element={<Comment2 />} />
            <Route path="comment3" element={<Comment3 />} />
          </Route>
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/services" element={<Services />}>
            <Route index element={<Comment />} />
            <Route path="/services/comment2" element={<Comment2 />} />
            <Route path="/services/comment3" element={<Comment3 />} />
          </Route>
          <Route path="/pricing" element={<Princing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
