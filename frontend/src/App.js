import { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import webFont from "webfontloader";

function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
