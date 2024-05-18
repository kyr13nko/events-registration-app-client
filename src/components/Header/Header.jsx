import { NavLink } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <NavLink to="/events">Events</NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
