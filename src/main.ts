import "./app.scss";
import App from "./App.svelte";
import "virtual:uno.css";
import "virtual:svg-icons-register";
import "font-awesome/css/font-awesome.min.css";

const app = new App({
  target: document.getElementById("app")!
});

export default app;
