import './App.css';
import Home from "./Component/Home/Home";
import Programs from './Component/Programs/Programs';
import Reasons from './Component/Reasons/Reasons';
import Cards from "./Component/Cards/Cards";
import Testimonials from './Component/Testimonials/Testimonials.jsx';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Programs />
      <Reasons />
      <Cards />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;