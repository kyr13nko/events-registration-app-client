import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events/eventsOperations";
import { selectEvents } from "../../store/events/eventsSelectors";
import { Link } from "react-router-dom";

const EventsBoard = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  return (
    <ul>
      {events.map((event) => (
        <li key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <Link to="/registration">Register</Link>
          <Link to="/participants">View</Link>
        </li>
      ))}
    </ul>
  );
};

export default EventsBoard;
