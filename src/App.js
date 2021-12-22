import "./App.css";
import AppointmentBookingForm from "./components/appointmentBookingForm";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
function App() {
    return (
        <div
            className="App"
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <NavBar />
            <AppointmentBookingForm />
            <Footer />
        </div>
    );
}

export default App;
