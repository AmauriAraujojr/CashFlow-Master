import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Register } from "../pages/Register/Register";
import { ProtectedDash } from "../components/protected_routes";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register/>} />


      <Route path="/dashboard" element={<ProtectedDash/>}>
         <Route index element={<Dashboard/>}/>
      </Route> 

    </Routes>
  );
};
