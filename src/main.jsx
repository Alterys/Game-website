import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>loading...</div>}>
    <App />
  </Suspense>
);
