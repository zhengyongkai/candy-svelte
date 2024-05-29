import "./app.scss";
import App from "./App.svelte";
import "virtual:uno.css";
import "virtual:svg-icons-register";

const app = new App({
  target: document.getElementById("app")!
});

export default app;
