import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./i18n";
import "./index.css";
import store from "./store.ts";
import Error from "./ui/Error.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={Error}
      onReset={() => window.location.replace("/")}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
