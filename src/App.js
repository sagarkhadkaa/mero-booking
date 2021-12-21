import "./App.css";
import AppointmentBookingForm from "./components/appointmentBookingForm";
import Button from "./components/button";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
function App() {
    return (
        <div className="App">
            <NavBar />
            <AppointmentBookingForm />
            <Footer />
        </div>
    );
}

export default App;
