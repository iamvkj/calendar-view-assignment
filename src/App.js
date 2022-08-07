import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CalendarView from "./components/CalendarView";
import Alert from "./components/Alert";

const App = () => {

    const [alert, setAlert] = useState("");

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    return (
        <>
            <Alert alert={alert} />

            <Routes>
                <Route exact path="/" element={<CalendarView showAlert={showAlert} />} />
            </Routes>
        </>
    )
}

export default App;