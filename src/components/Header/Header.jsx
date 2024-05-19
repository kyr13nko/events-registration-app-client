import { Container } from "../../styles/GlobalStyles";
import { HeaderBlock, StyledLink } from "./Header.styled";

const Header = () => {
  return (
    <HeaderBlock>
      <Container>
        <nav>
          <StyledLink to="/events">Events</StyledLink>
        </nav>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
