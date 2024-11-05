import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./ui/styles/global.css";

import { App } from "./App.tsx";
console.log("BUSCARLIVROSNAMAIN", import.meta.env.VITE_ROTA_LIVROS)


import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
