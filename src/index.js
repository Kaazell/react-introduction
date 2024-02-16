// Importer les outils React
import ReactDOM from "react-dom/client"

// Importer notre premier composant App
import { App } from "./App";

// Cibler la div dont l'id est root
const divRoot = document.getElementById("root");

// Créer un noeud racine react à partir de la div root
const reactRoot = ReactDOM.createRoot(divRoot)

// Injecter notre premier composant dans ne noeud racine
reactRoot.render(<App />)