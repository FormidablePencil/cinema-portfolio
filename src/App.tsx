import { useEffect } from "react";
import "./App.sass";
import Routes from "./Routes";
import { Provider } from "react-redux";
import storeConfig from "./store.ts";
import { init } from "emailjs-com";

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
