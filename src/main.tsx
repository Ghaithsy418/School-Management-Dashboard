import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./ui/Error.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={Error}
      onReset={() => window.location.replace("/")}
    >
      <UserProvider>
        <App />
      </UserProvider>
    </ErrorBoundary>
  </StrictMode>,
);
