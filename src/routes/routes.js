import { Route, Routes, Navigate } from "react-router-dom";
import ClientRegister from "../pages/ClientRegister/ClientRegister";
import ContactRegister from "../pages/ContactRegister/ContactRegister2";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/client-register" element={<ClientRegister />} />
      <Route path="/contact-register" element={<ContactRegister />} />
      <Route path="*" element={<Navigate replace to="/client-register" />} />
    </Routes>
  );
};

export default MainRoutes;
