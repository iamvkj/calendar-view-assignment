import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
    format, parse, startOfWeek, getDay, locales,
});

const events = [
    {
        title: "Raksha Bandhan (Rakhi)",
        allDay: true,
        start: new Date(2022, 7, 11),
        end: new Date(2022, 7, 11)
    },
    {
        title: "Sawan Samapti",
        allDay: true,
        start: new Date(2022, 7, 14),
        end: new Date(2022, 7, 14)
    },
    {
        title: "Janmashtami",
        allDay: true,
        start: new Date(2022, 7, 19),
        end: new Date(2022, 7, 19)
    },
    {
        title: "Ganesh Chaturthi/Vinayaka Chaturthi",
        allDay: true,
        start: new Date(2022, 7, 31),
        end: new Date(2022, 7, 31)
    }
];

const CalendarView = (props) => {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
        props.showAlert("Event added successfully", "success");
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3" style={{ marginRight: "" }}>
                        <h2>Calendar View</h2>
                        <h4>Add New Event</h4>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Add title"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="start" className="form-label">Start Date</label>
                            <DatePicker
                                className="form-control"
                                placeholderText="Start date"
                                selected={newEvent.start}
                                onChange={(start) => setNewEvent({ ...newEvent, start })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="end" className="form-label">End Date</label>
                            <DatePicker
                                className="form-control"
                                placeholderText="End Date"
                                selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                        </div>
                        <button className="btn btn-dark" onClick={handleAddEvent}>
                            Add Event
                        </button>
                    </div>

                    <div className="row col-md-9">
                        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalendarView;