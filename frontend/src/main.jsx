import { createRoot } from "react-dom/client";
import { ModalProvider } from "./react/context/ModalContext.jsx";
import App from "./App.jsx";

// redux
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
const { store, persistor } = setupStore();

// Importation des styles principaux
import "./main.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </PersistGate>
  </Provider>
);
