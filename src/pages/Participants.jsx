import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getEventById } from "../store/events/eventsOperations";
import { selectEventById, selectIsLoading } from "../store/events/eventsSelectors";

import View from "../components/View/View";
import { FiltersBlock, Section, Title } from "../styles/GlobalStyles";
import Filter from "../components/Filter/Filter";
import { getFilteredRegistrations } from "../store/filter/filterSelectors";

const Participants = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector(selectEventById);
  const isLoading = useSelector(selectIsLoading);

  const filteredRegistrations = useSelector(getFilteredRegistrations);

  useEffect(() => {
    dispatch(getEventById(id));
  }, [dispatch, id]);

  return (
    <Section>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        event.title && (
          <>
            <Title>&quot;{event.title}&quot; event participants</Title>
            {event.registrations.length > 0 && (
              <FiltersBlock>
                <Filter title="name" />
                <Filter title="email" />
              </FiltersBlock>
            )}
            <View event={{ ...event, registrations: filteredRegistrations }} />
          </>
        )
      )}
    </Section>
  );
};

export default Participants;
