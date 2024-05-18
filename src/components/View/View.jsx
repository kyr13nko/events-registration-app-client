const View = ({ event }) => {
  return !event.registrations?.length > 0 ? (
    <div>Nobody register</div>
  ) : (
    <ul>
      {event.registrations?.map((member) => (
        <li key={member._id}>
          <h3>{member.fullName}</h3>
          <p>{member.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default View;
