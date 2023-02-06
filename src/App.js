import "./App.css";
import Map from "./components/map";
import Navbar from "./components/navbar";
import { useState } from "react";
import "./App.css";
import Spinner from "./components/spinner";
import { MapProvider } from "./context/MapContext";

function App() {
  const [toggleState, setToggleState] = useState(1);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">

      <Navbar 
        setToggleStateFromParent={setToggleState} 
        setLoading={setLoading}
      />

      <div className={toggleState === 1 ? "content  active-content" : "content"}>
        <div className="content-text">
          <p>
            « comment faire pour optimiser l’affichage d’une carte quand l’interface
            dispose d’onglets ». En effet quand tu changes d’onglet la map va être
            détruite puis remontée par react lorsque l’onglet est changé. C’est
            problématique car le rechargement de la map est coûteux en termes
            d’appels réseau et licence pour récupérer les fonds de carte (qui sont
            facturés par appel). Dans les technos à utiliser : Reactjs bien sûr et
            MapLibre (qui est un fork open source de mapbox), pour les fonds de
            carte tu peux utiliser MapTiler.
          </p>
        </div>
      </div>
      <MapProvider>
      <div className={toggleState === 2 ? "content  active-content" : "content"}>
        {loading && <Spinner />}
 
          <Map toggleState={toggleState} setLoading={setLoading} />

      </div>
      </MapProvider>
    </div>
  );
}

export default App;
