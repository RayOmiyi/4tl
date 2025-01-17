import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import { Home, About, Events, Gallery, Contact,EventId } from './pages/index';
import Navbar from './components/General/Navbar';
import Footer from "./components/General/Footer";
import Sidebar from "./components/General/Sidebar";
function App() {
  const location = useLocation();

  return (
    <div className="bg-black">
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.key} // Ensure unique key for each route change
          timeout={500} // Transition duration
          classNames="fade" // You can customize this class to apply the animation
        >
          <div className="page-transition-wrapper">
            <Routes location={location}>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/event" element={<Events />}/>
              <Route path="/event/:eventId" element={<EventId/>} />
              <Route path="/gallery" element={<Gallery />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
