import React from "react";
import ReactDOM from "react-dom/client";
import { DesignSystemPreview } from "./design-system/preview/DesignSystemPreview";
import "./design-system/styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DesignSystemPreview />
  </React.StrictMode>
);
