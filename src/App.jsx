// import  from "./components/Hero";
// import  from "./components/Navbar";
// import  from "./components/Offer";
// import Plans from "./components/Plans";
// import Rooms from "./components/Rooms";
// import Slider from "./components/Slider";
// import Footer from "./components/Footer";
import {
    Hero,
    Navbar,
    Offer,
    Plans,
    Slider,
    Footer,
    Rooms
} from "./components/index";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Offer />
            <Plans />
            <Rooms />
            <Slider />
            <Footer />
        </div>
    );
}

export default App;
