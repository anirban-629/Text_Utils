import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import AlertNotification from "./components/AlertNotification";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState("light");
  const [aboutBGC, setAboutBGC] = useState("#fff");
  const [textColor, setTextColor] = useState("#000");
  const [alert, setAlert] = useState(null);

  let showAlert = (msg, variant) => {
    setAlert({
      message: msg,
      color: variant,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextColor("#fff");
      setAboutBGC("#212529");
    } else {
      setMode("light");
      setTextColor("#000");
      setAboutBGC("#fff");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          homeText="Home"
          mode={mode}
          toggleMode={toggleMode}
          alert={showAlert}
        />
        <AlertNotification alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Let's Analyze the text"
                mode={mode}
                textColor={textColor}
                alert={showAlert}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={<About bgc={aboutBGC} textColor={textColor} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
