import "./App.css";
//import Components
import Header from "./components/Header/header";
import CardsComponent from "./components/Cards/CardsComponent";
import Features from "./components/Features/Features";
import Business from "./components/CardsBusiness/Business";
import FeedBack from "./components/FeedBack/FeedBack";
import Cta from "./components/CTA/Cta";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CardsComponent />
      <Features />
      <Business />
      <FeedBack />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
