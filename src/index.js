import React from "react";
import ReactDom from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import App from "./components/App";
import {Provider} from "react-redux";
import store from "./redux/store";
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);