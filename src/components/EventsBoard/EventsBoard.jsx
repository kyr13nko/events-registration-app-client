import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { getEvents } from "../../store/events/eventsOperations";
import { selectEvents } from "../../store/events/eventsSelectors";

const EventsBoard = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  return (
    <ul>
      {events.map(({ _id, title, description }) => (
        <li key={_id}>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link to={`/registration/${_id}`} state={{ from: location }}>
            Register
          </Link>
          <Link to={`/participants/${_id}`} state={{ from: location }}>
            View
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default EventsBoard;
