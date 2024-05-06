import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MdpForgot from "./pages/MdpForgot";
import CreateAccount from "./pages/CreateAccount";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="mdp-forgot" element={<MdpForgot />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
