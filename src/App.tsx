import 'parallax-effect-crystals/dist/index.css'
import { useEffect } from "react";
import "./App.sass";
import Routes from "./Routes";
import { Provider } from "react-redux";
import storeConfig from "./store.ts";
import { init } from "emailjs-com";
import { CrystalParallaxProvider } from "parallax-effect-crystals";
import 'parallax-effect-crystals/dist/index.css'

function App() {
  const store = storeConfig();
  useEffect(() => {
    init("user_wI1MtDUVRWTqeKdhb4pDH");
  }, []);

  return (
    <Provider store={store}>
      <CrystalParallaxProvider>
        <Routes />
      </CrystalParallaxProvider>
    </Provider>
  );
}

export default App;
