import "parallax-effect-crystals/dist/index.css";
import { useEffect } from "react";
import "./App.sass";
import Routes from "./Routes";
import { Provider } from "react-redux";
import storeConfig from "./store";
import { init } from "emailjs-com";
import "parallax-effect-crystals/dist/index.css";

function App() {
  const store = storeConfig();
  useEffect(() => {
    init("user_wI1MtDUVRWTqeKdhb4pDH");
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
