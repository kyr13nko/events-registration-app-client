import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { getEvents } from "../../store/events/eventsOperations";
import {
  selectCurrentPage,
  selectEvents,
  selectTotalPages,
} from "../../store/events/eventsSelectors";

import { LinkWrapper } from "./EventsBoard.styled";
import { Item, List } from "../../styles/GlobalStyles";

const EventsBoard = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);

  const events = useSelector(selectEvents);
  const [page, setPage] = useState(currentPage);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      await dispatch(getEvents({ page }));
      setLoading(false);
    };

    fetchEvents();
  }, [dispatch, page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (!loading && scrollTop + clientHeight >= scrollHeight - 10 && totalPages > currentPage) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, totalPages, loading]);

  const handleLoadMoreBtnClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <List>
        {events.map(({ _id, title, description }) => (
          <Item key={_id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <LinkWrapper>
              <Link to={`/registration/${_id}`} state={{ from: location }}>
                Register
              </Link>
              <Link to={`/participants/${_id}`} state={{ from: location }}>
                View
              </Link>
            </LinkWrapper>
          </Item>
        ))}
      </List>
      {totalPages > currentPage && (
        <button type="button" onClick={handleLoadMoreBtnClick}>
          Load more
        </button>
      )}
    </>
  );
};

export default EventsBoard;
