import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "../Page/HomePage";
import RegistrationPage from "../Page/RegistrationPage";
import ConfirmationPage from "../Page/ConfirmationPage";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index path="homepage" element={<HomePage />} />
        <Route path="registrationPage" element={<RegistrationPage />} />
        <Route path="confirmationPage" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;