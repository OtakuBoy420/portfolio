import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Layout from "../../Layout";
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";
export default function Router() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
