import { FallingLines } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";

const Loader = ({ data }) => {
  return (
    <Wrapper>
      <FallingLines color="#F4C550" width="100" visible={true} ariaLabel="falling-lines-loading" />
      {data && (
        <p>
          Our application database is hosted on the free render.com service. <br />
          Therefore, you need to wait until all the data is loaded. <br />
          Thank you for waiting!
        </p>
      )}
    </Wrapper>
  );
};

export default Loader;
