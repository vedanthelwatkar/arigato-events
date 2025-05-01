import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import App from "./App";

const Root = import.meta.env.DEV ? (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
) : (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

createRoot(document.getElementById("root")).render(Root);
