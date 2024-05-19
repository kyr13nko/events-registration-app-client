import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Loader from "../Loader/Loader";

import { Container } from "../../styles/GlobalStyles";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<Loader data="data" />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
