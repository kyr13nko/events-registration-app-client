import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { formatISODate } from "../../helpers/formatISODate";
import { getEvents } from "../../store/events/eventsOperations";
import {
  selectCurrentPage,
  selectEvents,
  selectTotalPages,
} from "../../store/events/eventsSelectors";

import { LinkWrapper, SortButtonsBLock } from "./EventsBoard.styled";
import { Button, Item, List } from "../../styles/GlobalStyles";

const EventsBoard = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const events = useSelector(selectEvents);

  const [page, setPage] = useState(currentPage);
  const [loading, setLoading] = useState(false);
  const [sortCriteria, setSortCriteria] = useState({ field: "eventDate", order: "asc" });

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

  const handleSortChange = (field) => {
    setSortCriteria((prev) => {
      const order = prev.field === field && prev.order === "asc" ? "desc" : "asc";
      return { field, order };
    });
  };

  const resetSort = () => {
    setSortCriteria({ field: "eventDate", order: "asc" });
  };

  const sortedEvents = [...events].sort((a, b) => {
    const fieldA = a[sortCriteria.field];
    const fieldB = b[sortCriteria.field];

    if (fieldA < fieldB) return sortCriteria.order === "asc" ? -1 : 1;
    if (fieldA > fieldB) return sortCriteria.order === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <>
      <SortButtonsBLock>
        <Button onClick={() => handleSortChange("title")}>Sort by Title</Button>
        <Button onClick={() => handleSortChange("eventDate")}>Sort by Date</Button>
        <Button onClick={() => handleSortChange("organizer")}>Sort by Organizer</Button>
        <Button onClick={resetSort}>Clear all</Button>
      </SortButtonsBLock>
      <List>
        {sortedEvents.map(({ _id, title, description, eventDate, organizer }) => (
          <Item key={_id}>
            <h3>{title}</h3>
            <p>
              <span>About:</span> {description}
            </p>
            <p>
              <span>Date:</span> {formatISODate(eventDate).date} <span>Time:</span>{" "}
              {formatISODate(eventDate).time}
            </p>
            <p>
              <span>Organizer:</span> {organizer}
            </p>
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
    </>
  );
};

export default EventsBoard;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";

// import { getEvents } from "../../store/events/eventsOperations";
// import {
//   selectCurrentPage,
//   selectEvents,
//   selectTotalPages,
// } from "../../store/events/eventsSelectors";

// import { LinkWrapper } from "./EventsBoard.styled";
// import { Item, List } from "../../styles/GlobalStyles";
// import { formatISODate } from "../../helpers/formatISODate";

// const EventsBoard = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const totalPages = useSelector(selectTotalPages);
//   const currentPage = useSelector(selectCurrentPage);

//   const events = useSelector(selectEvents);
//   const [page, setPage] = useState(currentPage);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       setLoading(true);
//       await dispatch(getEvents({ page }));
//       setLoading(false);
//     };

//     fetchEvents();
//   }, [dispatch, page]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
//       if (!loading && scrollTop + clientHeight >= scrollHeight - 10 && totalPages > currentPage) {
//         setLoading(true);
//         setPage((prev) => prev + 1);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [currentPage, totalPages, loading]);

//   // const handleLoadMoreBtnClick = () => {
//   //   setPage((prev) => prev + 1);
//   // };

//   return (
//     <>
//       <List>
//         {events.map(({ _id, title, description, eventDate, organizer }) => (
//           <Item key={_id}>
//             <h3>{title}</h3>
//             <p>
//               <span>About:</span>&#32; {description}
//             </p>
//             <p>
//               <span>Date:</span>&#32; {formatISODate(eventDate).date} <span>Time:</span>
//               &#32; {formatISODate(eventDate).time}
//             </p>
//             <p>
//               <span>Organizer:</span>&#32; {organizer}
//             </p>
//             <LinkWrapper>
//               <Link to={`/registration/${_id}`} state={{ from: location }}>
//                 Register
//               </Link>
//               <Link to={`/participants/${_id}`} state={{ from: location }}>
//                 View
//               </Link>
//             </LinkWrapper>
//           </Item>
//         ))}
//       </List>
//       {/* {totalPages > currentPage && (
//         <button type="button" onClick={handleLoadMoreBtnClick}>
//           Load more
//         </button>
//       )} */}
//     </>
//   );
// };

// export default EventsBoard;
