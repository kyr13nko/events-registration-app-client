import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const Events = lazy(() => import("../pages/Events"));
const Registration = lazy(() => import("../pages/Registration"));
const Participants = lazy(() => import("../pages/Participants"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="registration" element={<Registration />} />
        <Route path="participants" element={<Participants />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
