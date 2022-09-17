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
        title: "Sawan sawari",
        allDay: true,
        start: new Date(2022, 7, 8),
        end: new Date(2022, 7, 8)
    },
    {
        title: "Raksha bandhan (Rakhi)",
        allDay: true,
        start: new Date(2022, 7, 11),
        end: new Date(2022, 7, 11)
    },
    {
        title: "Janmashtami",
        allDay: true,
        start: new Date(2022, 7, 19),
        end: new Date(2022, 7, 19)
    },
    {
        title: "Ganesh chaturthi | 1st day",
        allDay: true,
        start: new Date(2022, 7, 31),
        end: new Date(2022, 7, 31)
    },
    {
        title: "Ganesh chaturthi | 10th day",
        allDay: true,
        start: new Date(2022, 8, 9),
        end: new Date(2022, 8, 9)
    },
    {
        title: "First day of shradh",
        allDay: true,
        start: new Date(2022, 8, 10),
        end: new Date(2022, 8, 10)
    },
    {
        title: "Last day of shradh",
        allDay: true,
        start: new Date(2022, 8, 25),
        end: new Date(2022, 8, 25)
    },
    {
        title: "First day of sharad navratri",
        allDay: true,
        start: new Date(2022, 8, 26),
        end: new Date(2022, 8, 26)
    },
    {
        title: "First day of durga puja festivities",
        allDay: true,
        start: new Date(2022, 9, 1),
        end: new Date(2022, 9, 1)
    },
    {
        title: "Maha saptami",
        allDay: true,
        start: new Date(2022, 9, 2),
        end: new Date(2022, 9, 2)
    },
    {
        title: "Maha ashtami",
        allDay: true,
        start: new Date(2022, 9, 3),
        end: new Date(2022, 9, 3)
    },
    {
        title: "Maha navami",
        allDay: true,
        start: new Date(2022, 9, 4),
        end: new Date(2022, 9, 4)
    },
    {
        title: "Dussehra",
        allDay: true,
        start: new Date(2022, 9, 5),
        end: new Date(2022, 9, 5)
    },
    {
        title: "Dhanteras",
        allDay: true,
        start: new Date(2022, 9, 23),
        end: new Date(2022, 9, 23)
    },
    {
        title: "Diwali",
        allDay: true,
        start: new Date(2022, 9, 24),
        end: new Date(2022, 9, 24)
    },
    {
        title: "Naraka Chaturdasi",
        allDay: true,
        start: new Date(2022, 9, 24),
        end: new Date(2022, 9, 24)
    },
    {
        title: "Govardhan puja",
        allDay: true,
        start: new Date(2022, 9, 25),
        end: new Date(2022, 9, 25)
    },
    {
        title: "Bhai duj",
        allDay: true,
        start: new Date(2022, 9, 26),
        end: new Date(2022, 9, 26)
    },
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