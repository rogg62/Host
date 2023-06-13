import "./App.css";
//import Components
import CardsComponent from "./components/Cards/CardsComponent";
import Business from "./components/CardsBusiness/Business";
import Cta from "./components/CTA/Cta";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CardsComponent />
      <Business />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
