import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const Events = lazy(() => import("../pages/Events"));
const Registration = lazy(() => import("../pages/Registration"));
const Participants = lazy(() => import("../pages/Participants"));

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="registration/:id" element={<Registration />} />
          <Route path="participants/:id" element={<Participants />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export default App;
