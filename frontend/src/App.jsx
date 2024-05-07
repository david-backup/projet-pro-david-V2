import { BrowserRouter, Route, Routes } from "react-router-dom";
import { basename } from "@config";
import { HomePage, LoginPage, MdpForgot, CreateAccount } from "@react/pages";
import Header from "./react/components/Header";
import Footer from "./react/components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter basename={basename}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="mdp-forgot" element={<MdpForgot />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
