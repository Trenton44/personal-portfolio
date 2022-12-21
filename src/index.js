import React from "react";

import ReactDOM from "react-dom/client";
import App from "./app.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));


const PageFrameworkCSS = {
    display: "flex",
    flexDirection: "column",
    height: "100%"
};


root.render(
    <div style={PageFrameworkCSS}>
        <App />
    </div>
);