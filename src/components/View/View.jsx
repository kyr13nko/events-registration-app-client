import { Item, List } from "../../styles/GlobalStyles";

const View = ({ event }) => {
  return event.registrations?.length > 0 ? (
    <List>
      {event.registrations?.map(({ _id, fullName, email }) => (
        <Item key={_id}>
          <h3>{fullName}</h3>
          <p>{email}</p>
        </Item>
      ))}
    </List>
  ) : (
    <div>Nobody register</div>
  );
};

export default View;
