import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getEventById } from "../store/events/eventsOperations";
import { selectEventById, selectIsLoading } from "../store/events/eventsSelectors";

import RegisterForm from "../components/RegisterForm/RegisterForm";

const Registration = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector(selectEventById);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getEventById(id));
  }, [dispatch, id]);

  return (
    <section>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        event.title && (
          <>
            <h2>&quot;{event.title}&quot; event registration</h2>
            <RegisterForm />
          </>
        )
      )}
    </section>
  );
};

export default Registration;
