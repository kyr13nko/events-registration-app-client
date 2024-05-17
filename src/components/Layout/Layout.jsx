import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

import { Container } from "../../styles/GlobalStyles";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
