import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactModal from "react-modal";
import { basename } from "@config";
import { HomePage, LoginPage, MdpForgot, CreateAccount } from "@react/pages";
import { Header, Footer } from "@react/components/common/layout";

// Configuration de React Modal
ReactModal.setAppElement("#root");

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
