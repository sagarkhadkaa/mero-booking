import { Route, Switch } from "react-router-dom";
import "./App.css";
import BookingAppointmentForm from "./components/bookingAppointmentForm";
import Home from "./components/home";
import ListingAppointmentsForm from "./components/listingAppointments";
function App() {
    return (
        <div
            className="App"
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Switch>
                <Route
                    path="/bookingAppointments"
                    component={BookingAppointmentForm}
                />
                <Route
                    path="/listingAppointments"
                    component={ListingAppointmentsForm}
                />
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    );
}

export default App;
