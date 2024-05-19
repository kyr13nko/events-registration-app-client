import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getEventById } from "../store/events/eventsOperations";
import { selectEventById, selectIsLoading } from "../store/events/eventsSelectors";

import RegisterForm from "../components/RegisterForm/RegisterForm";
import Loader from "../components/Loader/Loader";

import { RegistrationSection, Title } from "../styles/GlobalStyles";

const Registration = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector(selectEventById);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getEventById(id));
  }, [dispatch, id]);

  return (
    <RegistrationSection>
      {isLoading ? (
        <Loader />
      ) : (
        event.title && (
          <>
            <Title>&quot;{event.title}&quot; event registration</Title>
            <RegisterForm />
          </>
        )
      )}
    </RegistrationSection>
  );
};

export default Registration;
